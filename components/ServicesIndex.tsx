import Link from "next/link";
import FormLink from "./FormLink";
import { services, WORK_CATEGORIES } from "../lib/content";

/**
 * The three services, side by side.
 *
 * Each card now leads to that discipline's showcase rather than straight into
 * a brief — seeing the work is the step that belongs here, and the brief is
 * one click further on for anyone already convinced.
 *
 * The card is a <div>, not an <a>: it holds two destinations, and an anchor
 * inside an anchor is invalid HTML that browsers resolve by splitting the
 * markup. The showcase link is stretched across the whole card with an
 * ::after overlay, and the brief link is lifted above it — so the big target
 * still works while the secondary action stays independently clickable.
 */
export default function ServicesIndex() {
  return (
    <div className="od-svc">
      {services.map((s) => {
        const category = WORK_CATEGORIES[s.showcase];
        return (
          <div key={s.num} className="od-svc-card">
            <span className="od-svc-num">{s.num}</span>

            <h3 className="od-svc-name">
              <Link href={category.route} className="od-svc-stretch">
                {s.name}
              </Link>
            </h3>
            <p className="od-svc-blurb">{s.blurb}</p>

            <span className="od-svc-tags">
              {s.tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </span>

            <span className="od-svc-foot">
              <span className="od-svc-action">
                See {category.noun} work
                <span className="od-svc-mark" aria-hidden="true">
                  →
                </span>
              </span>

              <FormLink
                target={s.formTarget}
                variant="general"
                className="od-svc-brief"
              />
            </span>
          </div>
        );
      })}
    </div>
  );
}
