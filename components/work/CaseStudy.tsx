"use client";

import { useState } from "react";
import Link from "next/link";
import type { Project } from "../../lib/content";
import { FORM_ROUTES, FORM_SHOWCASE_CTA_LABEL } from "../../lib/forms";

/**
 * Case study layout.
 *
 * Left column is a media field — imagery with pull quotes set between it — and
 * it drives the page scroll. The right panel is pinned: it stays in frame while
 * the media moves past, and scrolls its own overflow when the narrative is
 * longer than the viewport. Collapsing it hands the full width to the imagery.
 *
 * Direction: Liron Moran (dark gallery editorial) for the canvas and the
 * treatment of images as framed artwork; PORTO ROCHA for the fixed-panel /
 * flowing-field split; INK for large-format, minimally treated imagery.
 * Orange stays interaction-only, per the Pipe lock.
 */
export default function CaseStudy({ project }: { project: Project }) {
  const [open, setOpen] = useState(true);

  return (
    <article className="od-cs">
      <header className="od-cs-head">
        <Link href="/" className="od-cs-back">
          <span aria-hidden="true">←</span> Work
        </Link>

        <h1 className="od-cs-title">{project.title}</h1>
        <p className="od-cs-summary">{project.summary}</p>

        <ul className="od-cs-tags">
          {project.tags.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        {/* clearly attached to the work itself, visible with zero scrolling,
            rather than only reachable at the bottom of the narrative panel */}
        <div className="od-cs-intro-cta">
          <Link href={FORM_ROUTES[project.formTarget]} className="od-cta-mini">
            {FORM_SHOWCASE_CTA_LABEL[project.formTarget]}
          </Link>
        </div>
      </header>

      <div className={`od-cs-body${open ? "" : " od-cs-collapsed"}`}>
        {/* left: the media field */}
        <div className="od-cs-media">
          {project.media.map((m, i) =>
            m.kind === "image" ? (
              <figure key={i} className="od-cs-fig">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={m.src} alt={m.alt} loading="lazy" />
                {m.caption ? <figcaption>{m.caption}</figcaption> : null}
              </figure>
            ) : (
              <blockquote key={i} className="od-cs-quote">
                <p>{m.text}</p>
                {m.attribution ? <cite>{m.attribution}</cite> : null}
              </blockquote>
            )
          )}
        </div>

        {/* right: pinned narrative + credits */}
        <aside className="od-cs-panel" aria-label="About the project">
          <button
            type="button"
            className="od-cs-toggle"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            About the project
            <span className="od-cs-toggle-mark" aria-hidden="true">
              {open ? "✕" : "+"}
            </span>
          </button>

          <div className="od-cs-panel-scroll" hidden={!open}>
            {project.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}

            <dl className="od-cs-credits">
              {project.credits.map((c) => (
                <div key={c.label}>
                  <dt>{c.label}</dt>
                  <dd>
                    {c.values.map((v) => (
                      <span key={v}>{v}</span>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>

            <Link href={FORM_ROUTES[project.formTarget]} className="od-inline-cta">
              {FORM_SHOWCASE_CTA_LABEL[project.formTarget]}
            </Link>
          </div>
        </aside>
      </div>
    </article>
  );
}
