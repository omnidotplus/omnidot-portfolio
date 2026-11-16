"use client";

import { useEffect, useRef, useState } from "react";

export type WizardStep = { label: string; content: React.ReactNode };

/**
 * Chrome around a long form: breaks it into fieldsets shown one at a time,
 * with Back / Next / Submit and a step counter. The <form> underneath is
 * untouched, it's still one plain HTML POST, every field from every step
 * lives in the DOM the whole time, this only toggles which fieldset is
 * `hidden`. A step's required fields are validated with the Constraint
 * Validation API on Next (`fieldset.reportValidity()`, which also respects
 * any `setCustomValidity()` set elsewhere, e.g. RequireAtLeastOne) so the
 * same native error bubble the rest of the form already uses blocks
 * advancing past an incomplete step.
 *
 * Without JavaScript this degrades to the original flat form: a <noscript>
 * override forces every step visible and the real submit button shown,
 * since the index never advances past 0 and the submit slot would
 * otherwise stay hidden forever.
 */
export default function FormWizard({
  steps,
  submitButton,
}: {
  steps: WizardStep[];
  submitButton: React.ReactNode;
}) {
  const [index, setIndex] = useState(0);
  const last = steps.length - 1;
  const fieldsetRefs = useRef<Array<HTMLFieldSetElement | null>>([]);
  const mounted = useRef(false);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    fieldsetRefs.current[index]?.focus();
  }, [index]);

  const goNext = () => {
    const current = fieldsetRefs.current[index];
    if (current && !current.reportValidity()) return;
    setIndex((i) => Math.min(i + 1, last));
  };
  const goBack = () => setIndex((i) => Math.max(i - 1, 0));

  return (
    <div className="od-form-wizard">
      <noscript>
        <style>{`
          .od-form-step[hidden]{display:flex !important}
          .od-form-submit-slot[hidden]{display:inline-flex !important}
          .od-form-next,.od-form-back{display:none !important}
          .od-form-progress{display:none !important}
        `}</style>
      </noscript>

      <div className="od-form-progress">
        <p className="od-form-progress-label" aria-live="polite">
          Step {index + 1} of {steps.length}: {steps[index].label}
        </p>
        <div className="od-form-progress-bar">
          <div
            className="od-form-progress-fill"
            style={{ width: `${((index + 1) / steps.length) * 100}%` }}
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

        <span className="od-form-submit-slot" hidden={index !== last}>
          {submitButton}
        </span>
      </div>
    </div>
  );
}
