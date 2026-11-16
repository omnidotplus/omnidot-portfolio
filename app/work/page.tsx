import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "../../lib/content";
import { FORM_ROUTES, FORM_SHOWCASE_CTA_LABEL } from "../../lib/forms";

export const metadata: Metadata = {
  title: "Work - Omnidot",
  description: "Brand identity, fleet livery and campaign work from the Omnidot studio.",
};

export default function WorkIndexPage() {
  return (
    <div className="od-wi">
      <header className="od-wi-head">
        <Link href="/" className="od-wi-back">
          <span aria-hidden="true">←</span> Home
        </Link>
        <h1 className="od-wi-title">All Work.</h1>
        <p className="od-wi-sub">
          Brand identity, fleet livery and campaign work from the Omnidot studio.
        </p>
      </header>

      <div className="od-wi-grid">
        {projects.map((p) => (
          <div key={p.slug} className="od-wi-card">
            <Link href={FORM_ROUTES[p.formTarget]} className="od-cta-mini">
              {FORM_SHOWCASE_CTA_LABEL[p.formTarget]}
            </Link>
            <Link href={`/work/${p.slug}`} className="od-wi-card-link">
              <figure className="od-wi-fig">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.cover} alt="" loading="lazy" />
              </figure>
              <h2 className="od-wi-card-title">{p.title}</h2>
              <p className="od-wi-card-summary">{p.summary}</p>
              <ul className="od-wi-card-tags">
                {p.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
