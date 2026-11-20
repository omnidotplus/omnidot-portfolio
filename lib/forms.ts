/**
 * The two project-intake forms are Google Forms. This site renders no form of
 * its own — every "start a project" action is an outbound link to one of
 * these two.
 *
 * TWO URL SHAPES, AND WHY THEY DIFFER:
 *
 *   website — the PUBLISHED link (/forms/d/e/<long-id>/viewform). This is the
 *             canonical public URL Google hands you under Send/Publish.
 *             Verified: 200, no redirect, title "WEB DESIGN PROJECT CLIENT
 *             BRIEF".
 *
 *   brand   — the document link (/forms/d/<doc-id>/viewform), because the
 *             form has no published link yet. Google redirects this shape to
 *             the published one automatically, so it is self-healing: it
 *             starts working the moment the form is published, with no code
 *             change needed.
 *
 * STATUS OF THE BRAND FORM (re-checked 2026-11-18, signed out, in a real
 * browser as well as over curl): NOT PUBLIC. /viewform, /edit and /preview
 * all bounce to accounts.google.com. /preview appears to work for the form's
 * owner only because the owner is signed in — it is an editor URL, never a
 * shareable one. Fix it on the form: Publish / Send, and allow responses from
 * anyone, with no "restrict to users in <domain>" setting. Nothing in this
 * codebase can change that.
 */
export const FORM_LINKS = {
  website:
    "https://docs.google.com/forms/d/e/1FAIpQLScfgp_YpKhvNvbcK3wAHrQzWabK7MjB1iKJLjlvd6N_8eLabA/viewform",
  brand:
    "https://docs.google.com/forms/d/1QkdA-4csKYqZQ_3LyGDtYtFFC-_i-3CZKU9UmJxsZh0/viewform",
} as const;

export type FormTarget = "website" | "brand";

/** General intent: the nav, the services list, the contact section. */
export const FORM_CTA_LABEL: Record<FormTarget, string> = {
  website: "Start a website project",
  brand: "Start a brand project",
};

/** Shorter wording for a CTA sitting directly on a piece of shown work. */
export const FORM_SHOWCASE_CTA_LABEL: Record<FormTarget, string> = {
  website: "Get a website like this",
  brand: "Get a brand like this",
};
