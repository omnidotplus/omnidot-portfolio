"use client";

import { usePathname } from "next/navigation";
import MotionLayer from "./MotionLayer";

/**
 * Forces the motion layer to remount on every navigation.
 *
 * App Router keeps client components mounted across route changes when the
 * Router Cache can reuse them, so the effect would not re-run — while React
 * still replaces the DOM underneath. The observers would then be watching
 * detached nodes, and nothing on the restored page would ever reveal, count
 * up, or fill. Keying by pathname guarantees a clean teardown and rebind
 * against whatever is actually on screen.
 */
export default function RouteMotion() {
  const pathname = usePathname();
  return <MotionLayer key={pathname} />;
}
