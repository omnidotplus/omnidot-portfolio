import Link from "next/link";
import {
  projects,
  projectsOfKind,
  WORK_CATEGORIES,
  WORK_KIND_ORDER,
  type WorkKind,
} from "../../lib/content";

/**
 * The work index filter: three links, not three buttons.
 *
 * Each view is its own route, so the current filter is in the URL and can be
 * linked, shared, bookmarked and indexed — and the whole thing keeps working
 * with JavaScript off. Next's client-side navigation makes a click feel like
 * a toggle rather than a page load.
 *
 * Counts are shown because they are the honest version of the control: a
 * visitor can see how much sits behind each view before spending a click on
 * it, and an empty category becomes obvious instead of looking broken.
 */
export default function WorkToggle({ active }: { active: "all" | WorkKind }) {
  const options = [
    { key: "all" as const, href: "/work", label: "All work", count: projects.length },
    ...WORK_KIND_ORDER.map((kind) => ({
      key: kind,
      href: WORK_CATEGORIES[kind].route,
      label: WORK_CATEGORIES[kind].toggleLabel,
      count: projectsOfKind(kind).length,
    })),
  ];

  return (
    <nav className="od-wi-toggle" aria-label="Filter work by discipline">
      {options.map((o) => {
        const current = o.key === active;
        return (
          <Link
            key={o.key}
            href={o.href}
            className={`od-wi-toggle-item${current ? " od-wi-toggle-item--on" : ""}`}
            // the current view is still a link (so it stays keyboard
            // reachable and re-clickable), but it is announced as the page
            // you are already on
            aria-current={current ? "page" : undefined}
          >
            {o.label}
            <span className="od-wi-toggle-count">{o.count}</span>
          </Link>
        );
      })}
    </nav>
  );
}
