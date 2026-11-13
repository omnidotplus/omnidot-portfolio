import type { FieldGroupSpec } from "../../lib/forms";

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

/**
 * A radio or checkbox group, with an optional "Other" option that reveals a
 * free-text field. The reveal is pure CSS (:has()) — no JS, no client
 * component — matching the rest of the form being a plain HTML POST.
 *
 * Native HTML can require a radio group (every input shares `required`), but
 * there is no equivalent for "check at least one" on a checkbox group, so a
 * required checkbox group is only enforced visually (asterisk + hint), not
 * by the browser.
 */
export default function FieldGroup({
  legend,
  name,
  type,
  options,
  otherName,
  required,
  hint,
}: FieldGroupSpec) {
  const hasOther = options.includes("Other") && !!otherName;
  const groupRequired = required && type === "radio";

  return (
    <fieldset className={`od-form-group${hasOther ? " od-form-group--other" : ""}`}>
      <legend className="od-form-legend">
        {legend}
        {required ? <span className="od-form-req" aria-hidden="true"> *</span> : null}
      </legend>
      {hint ? <p className="od-form-hint">{hint}</p> : null}

      <div className="od-form-options">
        {options.map((opt) => {
          const id = `${name}-${slug(opt)}`;
          return (
            <label key={opt} className="od-form-option" htmlFor={id}>
              <input
                type={type}
                id={id}
                name={name}
                value={opt}
                required={groupRequired}
              />
              <span>{opt}</span>
            </label>
          );
        })}
      </div>

      {hasOther ? (
        <div className="od-form-other">
          <label className="od-form-field" htmlFor={`${name}-other-input`}>
            <span className="od-form-field-label">Please specify</span>
            <input
              type="text"
              id={`${name}-other-input`}
              name={otherName}
              className="od-form-input"
              autoComplete="off"
            />
          </label>
        </div>
      ) : null}
    </fieldset>
  );
}
