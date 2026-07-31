"use client";

import { useState } from "react";
import { services } from "@/lib/content";

/**
 * Services as an index list rather than a card row.
 *
 * Hovering a row bleeds that service's image in behind the whole list at low
 * opacity under a black gradient, so the type stays readable. This is state-
 * driven rather than DOM-driven, which is why it survived the port cleanly.
 */
export default function ServicesIndex() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div
      className={`od-svc${active !== null ? " od-svc-live" : ""}`}
      onMouseLeave={() => setActive(null)}
    >
      <div className="od-svc-bg" aria-hidden="true">
        {services.map((s, i) => (
          <img
            key={s.num}
            src={s.image}
            alt=""
            loading="lazy"
            className={i === active ? "od-on" : undefined}
          />
        ))}
      </div>

      {services.map((s, i) => (
        <a
          key={s.num}
          href="#contact"
          className="od-svc-row"
          aria-label={s.name}
          onMouseEnter={() => setActive(i)}
          onFocus={() => setActive(i)}
        >
          <span className="od-svc-num">{s.num}</span>
          <h3 className="od-svc-name">{s.name}</h3>
          <span className="od-svc-tags">
            {s.tags.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </span>
          <span className="od-svc-mark" aria-hidden="true">
            →
          </span>
        </a>
      ))}
    </div>
  );
}
