import {
  FORM_LINKS,
  FORM_CTA_LABEL,
  FORM_SHOWCASE_CTA_LABEL,
  type FormTarget,
} from "../lib/forms";

/**
 * Every intake CTA on the site. The briefs live on Google Forms, so this is a
 * plain outbound <a> — not next/link, which is for in-app routes and would
 * prefetch something it cannot prefetch.
 *
 * Opening in a new tab is deliberate: a visitor who starts a brief should not
 * lose the work they were looking at, and the form is a different product with
 * its own back-stack. `rel` is set accordingly — `noopener` is the one that
 * matters, it denies the opened page a handle on `window.opener`.
 *
 * `variant` picks the wording, not the styling: "showcase" is for a CTA sitting
 * on a specific piece of work ("Get a website like this"), "general" for the
 * nav and contact section ("Start a website project").
 */
export default function FormLink({
  target,
  className,
  variant = "showcase",
  label,
}: {
  target: FormTarget;
  className?: string;
  variant?: "showcase" | "general";
  label?: string;
}) {
  const text =
    label ??
    (variant === "showcase"
      ? FORM_SHOWCASE_CTA_LABEL[target]
      : FORM_CTA_LABEL[target]);

  return (
    <a
      href={FORM_LINKS[target]}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
    </a>
  );
}
