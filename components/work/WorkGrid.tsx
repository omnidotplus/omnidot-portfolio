import Link from "next/link";
import FormLink from "../FormLink";
import type { Project } from "../../lib/content";

const KIND_LABEL = { website: "Website", brand: "Brand" } as const;

/**
 * The card grid, shared by all three work views so a card cannot drift
 * between them.
 */
export default function WorkGrid({ items }: { items: Project[] }) {
  return (
    <div className="od-wi-grid">
      {items.map((p) => (
        <div key={p.slug} className="od-wi-card">
          <FormLink target={p.formTarget} className="od-cta-mini od-cta-mini--overlay" />
          <Link href={`/work/${p.slug}`} className="od-wi-card-link">
            <figure className="od-wi-fig">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.cover} alt="" loading="lazy" />
            </figure>

            <div className="od-wi-card-meta">
              <span className={`od-wi-badge od-wi-badge--${p.kind}`}>
                {KIND_LABEL[p.kind]}
              </span>
              {/* concepts say so on the card, not only once you are inside
                  the case study — a visitor scanning the grid should never
                  have to click to find out whether something had a client */}
              {p.concept ? (
                <span className="od-wi-badge od-wi-badge--concept">Concept</span>
              ) : null}
            </div>

            <h3 className="od-wi-card-title">{p.title}</h3>
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
  );
}
