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
export default function RouteIntro() {
  const pathname = usePathname();
  return <Intro key={pathname} />;
}
