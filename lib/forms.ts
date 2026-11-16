/**
 * Formspree endpoints for the two project-intake forms.
 *
 * PLACEHOLDERS — replace with the real Formspree form IDs before launch.
 * Each form posts as a plain HTML submit (no JS), so this is the only
 * place that needs editing once the Formspree account exists.
 *
 * RECIPIENT EMAIL: both forms must be created/verified under
 * omnidotplus@gmail.com in the Formspree dashboard — that's the account
 * email Formspree delivers every submission to, not something this code
 * can set per-submission. Do not create these forms under any other
 * address.
 */
export const FORMSPREE_ENDPOINTS = {
  website: "https://formspree.io/f/REPLACE_WITH_WEBSITE_FORM_ID",
  brand: "https://formspree.io/f/REPLACE_WITH_BRAND_FORM_ID",
};

export type FormTarget = "website" | "brand";

/** Page routes for the two intake forms, keyed the same way as a project's
 *  or service's `formTarget` so a contextual CTA can resolve its link from
 *  content data instead of a hardcoded href. */
export const FORM_ROUTES: Record<FormTarget, string> = {
  website: "/contact/website",
  brand: "/contact/brand",
};

export const FORM_CTA_LABEL: Record<FormTarget, string> = {
  website: "Start a website project",
  brand: "Start a brand project",
};

/** Distinct, shorter wording for CTAs sitting directly on a piece of real
 *  showcased work (a project card, a case study's imagery) rather than the
 *  more general "start a project" intent used in the nav, header and
 *  services list. */
export const FORM_SHOWCASE_CTA_LABEL: Record<FormTarget, string> = {
  website: "Get a website like this",
  brand: "Get a brand like this",
};

export type FieldOption = string;

export type FieldGroupSpec = {
  legend: string;
  name: string;
  type: "radio" | "checkbox";
  options: FieldOption[];
  otherName?: string;
  required?: boolean;
  hint?: string;
};
