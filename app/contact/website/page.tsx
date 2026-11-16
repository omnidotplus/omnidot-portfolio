import type { Metadata } from "next";
import Link from "next/link";
import FieldGroup from "../../../components/forms/FieldGroup";
import RequireAtLeastOne from "../../../components/forms/RequireAtLeastOne";
import FormWizard, { type WizardStep } from "../../../components/forms/FormWizard";
import { FORMSPREE_ENDPOINTS } from "../../../lib/forms";

export const metadata: Metadata = {
  title: "Start a Website Project - Omnidot",
  description: "Tell us about your website project so we can scope it properly.",
};

export default function WebsiteBriefPage() {
  const steps: WizardStep[] = [
    {
      label: "Basics",
      content: (
        <>
          <label className="od-form-field" htmlFor="client_name">
            <span className="od-form-field-label">
              Name of Client | Organisation <span className="od-form-req">*</span>
            </span>
            <input
              className="od-form-input"
              type="text"
              id="client_name"
              name="client_name"
              required
            />
          </label>

          <label className="od-form-field" htmlFor="email">
            <span className="od-form-field-label">
              Email <span className="od-form-req">*</span>
            </span>
            <input className="od-form-input" type="email" id="email" name="email" required />
          </label>

          <label className="od-form-field" htmlFor="address">
            <span className="od-form-field-label">Address</span>
            <input className="od-form-input" type="text" id="address" name="address" />
          </label>
        </>
      ),
    },
    {
      label: "Domain & current site",
      content: (
        <>
          <label className="od-form-field" htmlFor="domain_name">
            <span className="od-form-field-label">
              What is your proposed domain name? (up to 3, comma-separated){" "}
              <span className="od-form-req">*</span>
            </span>
            <input
              className="od-form-input"
              type="text"
              id="domain_name"
              name="domain_name"
              placeholder="yourbrand.com, yourbrand.co"
              required
            />
          </label>

          <FieldGroup
            legend="Do you have a current website?"
            name="has_current_site"
            type="radio"
            options={["Yes", "No", "Other"]}
            otherName="has_current_site__other"
            required
          />
        </>
      ),
    },
    {
      label: "Objective & audience",
      content: (
        <>
          <label className="od-form-field" htmlFor="project_objective">
            <span className="od-form-field-label">
              Project objective <span className="od-form-req">*</span>
            </span>
            <textarea
              className="od-form-textarea"
              id="project_objective"
              name="project_objective"
              required
            />
          </label>

          <FieldGroup
            legend="Target audience"
            name="target_audience"
            type="radio"
            options={["Family persons", "Singles", "Aged people", "Youths", "Other"]}
            otherName="target_audience__other"
          />
        </>
      ),
    },
    {
      label: "Features & pages",
      content: (
        <>
          <FieldGroup
            legend="What website features and functionality do you want included?"
            name="features"
            type="checkbox"
            options={[
              "Social media integration",
              "Trackable contact forms",
              "Ecommerce functionality",
              "Member zone or subscription model",
              "Other",
            ]}
            otherName="features__other"
            required
            hint="Select at least one."
          />
          <RequireAtLeastOne groupName="features" />

          <FieldGroup
            legend="What key pages do you want on your website?"
            name="key_pages"
            type="checkbox"
            options={["Home", "About", "Services/Offering", "Blog", "Contact", "Gallery", "Other"]}
            otherName="key_pages__other"
            required
            hint="Select at least one."
          />
          <RequireAtLeastOne groupName="key_pages" />
        </>
      ),
    },
    {
      label: "Content & call to action",
      content: (
        <>
          <FieldGroup
            legend="Do you have your content ready?"
            name="content_ready"
            type="radio"
            options={[
              "Yes, all content is ready",
              "No, I need help writing it",
              "I'd like to hire a copywriter",
              "I have existing content that needs a refresh",
              "Other",
            ]}
            otherName="content_ready__other"
            required
          />

          <label className="od-form-field" htmlFor="cta">
            <span className="od-form-field-label">
              Call to action: what primary action do you want visitors to take?{" "}
              <span className="od-form-req">*</span>
            </span>
            <input className="od-form-input" type="text" id="cta" name="cta" required />
          </label>
        </>
      ),
    },
    {
      label: "References & notes",
      content: (
        <>
          <label className="od-form-field" htmlFor="reference_sites">
            <span className="od-form-field-label">
              List 3 websites you really like (links) <span className="od-form-req">*</span>
            </span>
            <input
              className="od-form-input"
              type="text"
              id="reference_sites"
              name="reference_sites"
              required
            />
          </label>

          <label className="od-form-field" htmlFor="color_scheme">
            <span className="od-form-field-label">
              Do you have a colour scheme/colours you want us to work with?{" "}
              <span className="od-form-req">*</span>
            </span>
            <input
              className="od-form-input"
              type="text"
              id="color_scheme"
              name="color_scheme"
              required
            />
          </label>

          <label className="od-form-field" htmlFor="notes">
            <span className="od-form-field-label">Any other thing you&apos;d like us to know? :D</span>
            <textarea className="od-form-textarea" id="notes" name="notes" />
          </label>
        </>
      ),
    },
  ];

  return (
    <main className="od-form-page">
      <Link href="/" className="od-wi-back">
        <span aria-hidden="true">←</span> Home
      </Link>

      <header className="od-form-head">
        <h1 className="od-form-title">Start a Website Project</h1>
        <p className="od-form-sub">
          The more detail you give us here, the faster we can scope your project and come back
          with a real proposal. Fields marked <span className="od-form-req">*</span> are required.
        </p>
      </header>

      <form
        className="od-form"
        action={FORMSPREE_ENDPOINTS.website}
        method="post"
        encType="multipart/form-data"
      >
        <input type="hidden" name="_subject" value="New website project brief" />
        <input type="hidden" name="_next" value="/contact/thanks" />
        <input
          type="text"
          name="_gotcha"
          className="od-form-hp"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        <FormWizard
          steps={steps}
          submitButton={
            <button type="submit" className="od-form-submit">
              Send brief
            </button>
          }
        />
      </form>
    </main>
  );
}
