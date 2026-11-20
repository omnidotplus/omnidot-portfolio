"use client";

import { usePathname } from "next/navigation";
import Intro from "./Intro";

/**
 * Replays the wordmark entrance on every route change.
 *
 * Keyed by pathname so the component remounts on navigation — without the key
 * it would mount once for the session and never play again when opening a
 * project.
 */
/**
 * The three work index views (/work and the two discipline routes) are one
 * place as far as the entrance is concerned. They are separate routes so the
 * filter lives in the URL, but veiling the page for two seconds every time
 * someone clicks the Websites/Brand toggle would make the control unusable.
 * Case study routes are not in this set — opening a project is a real move to
 * somewhere else, and still plays.
 */
const WORK_VIEWS = new Set(["/work", "/work/web-design", "/work/brand-design"]);

export default function RouteIntro() {
  const pathname = usePathname();
  const area = WORK_VIEWS.has(pathname) ? "work-views" : pathname;
  return <Intro key={area} />;
}
