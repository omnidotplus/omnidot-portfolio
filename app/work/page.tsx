import type { Metadata } from "next";
import Link from "next/link";
import WorkGrid from "../../components/work/WorkGrid";
import WorkToggle from "../../components/work/WorkToggle";
import FormLink from "../../components/FormLink";
import {
  projectsOfKind,
  WORK_CATEGORIES,
  WORK_KIND_ORDER,
} from "../../lib/content";

export const metadata: Metadata = {
  title: "Work - Omnidot",
  description:
    "Website and brand design from the Omnidot studio — client identity work and studio concepts.",
};

/**
 * Everything, split by discipline.
 *
 * The toggle filters to one discipline, but this view does not just dump all
 * eleven into one grid either — the two disciplines are separated under their
 * own headings, so "all work" still answers "what kind of studio is this?"
 * rather than making a visitor infer it from badges.
 */
export default function WorkIndexPage() {
  return (
    <div className="od-wi">
      <header className="od-wi-head">
        <Link href="/" className="od-wi-back">
          <span aria-hidden="true">←</span> Home
        </Link>
        <h1 className="od-wi-title">All Work.</h1>
        <p className="od-wi-sub">
          Website and brand design from the Omnidot studio. Every piece links straight to the
          brief for the kind of work it is — pick the one closest to what you need.
        </p>
        <WorkToggle active="all" />
      </header>

      {WORK_KIND_ORDER.map((kind) => {
        const category = WORK_CATEGORIES[kind];
        const items = projectsOfKind(kind);
        if (!items.length) return null;

        return (
          <section key={kind} className="od-wi-group" aria-labelledby={`group-${kind}`}>
            <div className="od-wi-group-head">
              <div>
                <h2 className="od-wi-group-title" id={`group-${kind}`}>
                  {category.heading}
                </h2>
                <p className="od-wi-group-blurb">{category.blurb}</p>
              </div>
              <div className="od-wi-group-actions">
                <Link href={category.route} className="od-wi-group-link">
                  See only {category.toggleLabel.toLowerCase()}
                </Link>
                <FormLink
                  target={kind}
                  variant="general"
                  className="od-cta-mini"
                />
              </div>
            </div>
            <WorkGrid items={items} />
          </section>
        );
      })}
    </div>
  );
}
