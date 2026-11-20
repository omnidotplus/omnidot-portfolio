import FormLink from "./FormLink";

/**
 * Contact, centred on the one line that matters.
 *
 * The right-hand form is gone. It was inherited from the template and had
 * never worked: `method="get"` with no `action` (so it reloaded the page and
 * discarded everything), a leftover Webflow Turnstile attribute with no
 * runtime behind it, and two separate inputs both named `email` — the phone
 * number would have overwritten the address even if something had been
 * listening. Intake now happens on the two Google Forms, which is where the
 * questions that actually scope a project live.
 *
 * What is left is the invitation, the two ways to take it up, and the direct
 * details for anyone who would rather just call.
 */
export default function Contact() {
  return (
    <section id={"contact"} className={"contact"}>
      <div className={"w-layout-blockcontainer contact-container w-container"}>
        <div className={"od-contact"}>
          <div className={"od-contact-head"}>
            <h2 className={"contact-h2"}>
              Let&rsquo;s work{" "}
              <span className={"od-contact-accent"}>together</span>
            </h2>
            <p className={"od-contact-lead"}>
              Tell us what you&rsquo;re building. The brief takes a few minutes and gives us
              enough to come back with a real proposal rather than a guess.
            </p>
          </div>

          <div className={"od-contact-ctas"}>
            <FormLink target="website" variant="general" className={"od-contact-cta"} />
            <FormLink target="brand" variant="general" className={"od-contact-cta"} />
          </div>

          <div className={"od-contact-details"}>
            <a href={"tel:+2348134408179"} className={"od-contact-detail"}>
              <span className={"od-contact-detail-value"}>+234 813 440 8179</span>
              <span className={"od-contact-detail-label"}>Phone</span>
            </a>
            <a href={"mailto:omnidotplus@gmail.com"} className={"od-contact-detail"}>
              <span className={"od-contact-detail-value"}>omnidotplus@gmail.com</span>
              <span className={"od-contact-detail-label"}>Email</span>
            </a>
            <a
              href={"https://www.instagram.com/designit_byomnidot/"}
              className={"od-contact-detail"}
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              <span className={"od-contact-detail-value"}>@designit_byomnidot</span>
              <span className={"od-contact-detail-label"}>Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
