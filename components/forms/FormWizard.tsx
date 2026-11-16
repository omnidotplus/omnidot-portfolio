"use client";

import { useEffect, useRef, useState } from "react";

export type WizardStep = { label: string; content: React.ReactNode };

/**
 * Chrome around a long form: breaks it into fieldsets shown one at a time,
 * with Back / Next / Submit and a progress bar. The <form> underneath is
 * untouched, it's still one plain HTML POST, every field from every step
 * lives in the DOM the whole time, this only toggles which fieldset is
 * `hidden`. A step's required fields are validated with the Constraint
 * Validation API on Next (`fieldset.reportValidity()`, which also respects
 * any `setCustomValidity()` set elsewhere, e.g. RequireAtLeastOne) so the
 * same native error bubble the rest of the form already uses blocks
 * advancing past an incomplete step.
 *
 * Reaching the submit button is gated three separate ways, because a
 * `hidden` submit button is still a valid target for implicit form
 * submission (pressing Enter in a text field) and hidden fields are barred
 * from the browser's own constraint validation — so without this, hitting
 * Enter on step 1 would silently POST the brief with every later step
 * empty:
 *   1. the submit control sits in a <fieldset disabled> until hydration
 *      confirms this is the last step, which also removes it as the
 *      form's "default button" for implicit submission;
 *   2. Enter inside a text input advances to the next step instead of
 *      reaching the form at all, except on the last step;
 *   3. a submit listener on the form itself refuses any submission that
 *      isn't on the last step, regardless of how it was triggered.
 * `disabled` is only ever applied post-hydration (never in the initial
 * server-rendered HTML), so a non-JS visitor keeps a real, always-enabled
 * submit button and the <noscript> override below still shows every step
 * and the submit button, exactly like the original flat form.
 *
 * goNext/the keydown listener read the current step from a ref rather than
 * the `index` state closed over at render time: the keydown/submit guards
 * are wired up in an effect that only re-runs if the step count changes
 * (practically never), so a version of goNext that trusted its own
 * render's `index` would freeze at whichever step was current the first
 * time that effect ran, silently re-validating the wrong fieldset forever.
 */
export default function FormWizard({
  steps,
  submitButton,
}: {
  steps: WizardStep[];
  submitButton: React.ReactNode;
}) {
  const [index, setIndex] = useState(0);
  const [hydrated, setHydrated] = useState(false);
  const last = steps.length - 1;
  const indexRef = useRef(0);
  const fieldsetRefs = useRef<Array<HTMLFieldSetElement | null>>([]);
  const rootRef = useRef<HTMLDivElement>(null);
  const mounted = useRef(false);

  useEffect(() => setHydrated(true), []);

  useEffect(() => {
    indexRef.current = index;
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    fieldsetRefs.current[index]?.focus();
  }, [index]);

  const goNext = () => {
    const current = fieldsetRefs.current[indexRef.current];
    if (current && !current.reportValidity()) return;
    setIndex((i) => Math.min(i + 1, last));
  };
  const goBack = () => setIndex((i) => Math.max(i - 1, 0));

  useEffect(() => {
    const form = rootRef.current?.closest("form");
    if (!form) return;

    const onFormSubmit = (e: Event) => {
      if (indexRef.current !== last) e.preventDefault();
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Enter" || indexRef.current === last) return;
      const target = e.target as HTMLElement;
      if (target.tagName !== "INPUT") return; // let textarea Enter insert a newline as usual
      const inputType = (target as HTMLInputElement).type;
      if (inputType === "submit" || inputType === "button" || inputType === "file") return;
      e.preventDefault();
      goNext();
    };

    form.addEventListener("submit", onFormSubmit);
    form.addEventListener("keydown", onKeyDown);
    return () => {
      form.removeEventListener("submit", onFormSubmit);
      form.removeEventListener("keydown", onKeyDown);
    };
    // goNext itself only reads refs + functional setState, so it is safe to
    // close over once here and call later with no dependency on this effect
    // re-running when `index` changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [last]);

  return (
    <div className="od-form-wizard" ref={rootRef}>
      <noscript>
        <style>{`
          .od-form-step[hidden]{display:flex !important}
          .od-form-submit-slot[hidden]{display:inline-flex !important}
          .od-form-next,.od-form-back{display:none !important}
          .od-form-progress{display:none !important}
        `}</style>
      </noscript>

      <div className="od-form-progress">
        <span className="od-sr-only" aria-live="polite">
          Step {index + 1} of {steps.length}: {steps[index].label}
        </span>
        <div
          className="od-form-progress-bar"
          role="progressbar"
          aria-valuenow={index + 1}
          aria-valuemin={1}
          aria-valuemax={steps.length}
          aria-label={`Form progress: step ${index + 1} of ${steps.length}`}
        >
          <div
            className="od-form-progress-fill"
            style={{ transform: `scaleX(${(index + 1) / steps.length})` }}
          />
        </div>
      </div>

      {steps.map((step, i) => (
        <fieldset
          key={step.label}
          ref={(el) => {
            fieldsetRefs.current[i] = el;
          }}
          hidden={i !== index}
          tabIndex={-1}
          aria-label={step.label}
          className="od-form-step"
        >
          {step.content}
        </fieldset>
      ))}

      <div className="od-form-wizard-actions">
        {index > 0 ? (
          <button type="button" className="od-form-back" onClick={goBack}>
            Back
          </button>
        ) : (
          <span aria-hidden="true" />
        )}

        <button type="button" className="od-form-next" onClick={goNext} hidden={index === last}>
          Next
        </button>

        <fieldset
          className="od-form-submit-slot"
          hidden={index !== last}
          disabled={hydrated && index !== last}
        >
          {submitButton}
        </fieldset>
      </div>
    </div>
  );
}
