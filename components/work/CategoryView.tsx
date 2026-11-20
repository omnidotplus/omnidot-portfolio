import Link from "next/link";
import WorkGrid from "./WorkGrid";
import WorkToggle from "./WorkToggle";
import FormLink from "../FormLink";
import { projectsOfKind, WORK_CATEGORIES, type WorkKind } from "../../lib/content";

/**
 * A single discipline's showcase — the body shared by /work/web-design and
 * /work/brand-design, so the two cannot drift apart.
 *
 * Deliberately the same shell as /work (back link, title, blurb, toggle,
 * grid): moving between the three views should read as the same page
 * filtering, not as three different pages.
 */
export default function CategoryView({ kind }: { kind: WorkKind }) {
  const category = WORK_CATEGORIES[kind];
  const items = projectsOfKind(kind);

  return (
    <div className="od-wi">
      <header className="od-wi-head">
        <Link href="/" className="od-wi-back">
          <span aria-hidden="true">←</span> Home
        </Link>
        <h1 className="od-wi-title">{category.heading}.</h1>
        <p className="od-wi-sub">{category.blurb}</p>
        <WorkToggle active={kind} />
      </header>

      {items.length ? (
        <>
          <WorkGrid items={items} />
          <div className="od-wi-tail">
            <p className="od-wi-tail-text">
              Something here close to what you need?
            </p>
            <FormLink target={kind} variant="general" className="od-cta-mini" />
          </div>
        </>
      ) : (
        /* no project of this kind is a content state, not a broken page */
        <p className="od-wi-empty">
          Nothing published under this discipline yet.{" "}
          <Link href="/work">See all work</Link>.
        </p>
      )}
    </div>
  );
}
