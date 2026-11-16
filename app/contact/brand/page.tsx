import type { Metadata } from "next";
import Link from "next/link";
import FieldGroup from "../../../components/forms/FieldGroup";
import FormWizard, { type WizardStep } from "../../../components/forms/FormWizard";
import { FORMSPREE_ENDPOINTS } from "../../../lib/forms";

export const metadata: Metadata = {
  title: "Start a Brand Project - Omnidot",
  description: "Tell us about your brand project so we can scope it properly.",
};

export default function BrandBriefPage() {
  const steps: WizardStep[] = [
    {
      label: "Basics",
      content: (
        <>
          <label className="od-form-field" htmlFor="brand_name">
            <span className="od-form-field-label">
              Name of Brand <span className="od-form-req">*</span>
            </span>
            <input
              className="od-form-input"
              type="text"
              id="brand_name"
              name="brand_name"
              required
            />
          </label>

          <label className="od-form-field" htmlFor="email">
            <span className="od-form-field-label">
              Email <span className="od-form-req">*</span>
            </span>
            <input className="od-form-input" type="email" id="email" name="email" required />
          </label>
        </>
      ),
    },
    {
      label: "Project & products",
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

          <label className="od-form-field" htmlFor="products">
            <span className="od-form-field-label">
              List the products you will be selling (categories)
            </span>
            <input className="od-form-input" type="text" id="products" name="products" />
          </label>
        </>
      ),
    },
    {
      label: "Audience & keywords",
      content: (
        <>
          <FieldGroup
            legend="Demography of product consumers"
            name="demography"
            type="radio"
            options={["Family persons", "Businesses", "Aged people", "Men", "Women", "Other"]}
            otherName="demography__other"
          />

          <FieldGroup
            legend="What keywords define your brand?"
            name="keywords"
            type="radio"
            options={["Elegant & Classy", "Healthy & Natural", "Flawless", "Modern", "Other"]}
            otherName="keywords__other"
            required
          />
        </>
      ),
    },
    {
      label: "Current presence & content",
      content: (
        <>
          <FieldGroup
            legend="Do you have a current website?"
            name="has_current_site"
            type="radio"
            options={["Yes", "No", "Other"]}
            otherName="has_current_site__other"
            required
          />

          <FieldGroup
            legend="Do you have your content ready?"
            name="content_ready"
            type="radio"
            options={[
              "Yes, all brand materials are ready",
              "No, I need help creating them",
              "I'd like to hire a copywriter",
              "I have existing materials that need a refresh",
              "Other",
            ]}
            otherName="content_ready__other"
            required
          />
        </>
      ),
    },
    {
      label: "Uploads",
      content: (
        <>
          <div className="od-form-file">
            <label className="od-form-field-label" htmlFor="former_designs">
              Upload pictures of former brand/product designs
            </label>
            <input
              type="file"
              id="former_designs"
              name="former_designs"
              accept="image/*,.pdf"
              multiple
            />
          </div>

          <div className="od-form-file">
            <label className="od-form-field-label" htmlFor="logo_versions">
              Upload every version of your logo
            </label>
            <input
              type="file"
              id="logo_versions"
              name="logo_versions"
              accept="image/*,.pdf"
              multiple
            />
          </div>
        </>
      ),
    },
    {
      label: "References & colour",
      content: (
        <>
          <label className="od-form-field" htmlFor="reference_brands">
            <span className="od-form-field-label">
              List 3 brand designs you really like (links) <span className="od-form-req">*</span>
            </span>
            <input
              className="od-form-input"
              type="text"
              id="reference_brands"
              name="reference_brands"
              required
            />
          </label>

          <label className="od-form-field" htmlFor="color_scheme">
            <span className="od-form-field-label">
              Colour scheme/colours (hex codes) you want us to work with{" "}
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
        </>
      ),
    },
    {
      label: "Extra details",
      content: (
        <>
          <label className="od-form-field" htmlFor="ingredients">
            <span className="od-form-field-label">
              What ingredients are used in creating your product?
            </span>
            <input className="od-form-input" type="text" id="ingredients" name="ingredients" />
          </label>

          <label className="od-form-field" htmlFor="social_handles">
            <span className="od-form-field-label">Social media handles</span>
            <input
              className="od-form-input"
              type="text"
              id="social_handles"
              name="social_handles"
            />
          </label>

          <label className="od-form-field" htmlFor="motto">
            <span className="od-form-field-label">Your brand motto</span>
            <input className="od-form-input" type="text" id="motto" name="motto" />
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
        <h1 className="od-form-title">Start a Brand Project</h1>
        <p className="od-form-sub">
          The more detail you give us here, the faster we can scope your project and come back
          with a real proposal. Fields marked <span className="od-form-req">*</span> are required.
        </p>
      </header>

      <form
        className="od-form"
        action={FORMSPREE_ENDPOINTS.brand}
        method="post"
        encType="multipart/form-data"
      >
        <input type="hidden" name="_subject" value="New brand project brief" />
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
