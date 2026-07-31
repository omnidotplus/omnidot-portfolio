"use client";

import { useEffect, useState } from "react";
import Wordmark from "./Wordmark";

/**
 * Entrance: the wordmark resolves out of black, the dot lands, then the veil
 * lifts off the top.
 *
 * Plays on every load — an earlier "once per session" guard meant it silently
 * never ran again after the first visit, which read as it being broken.
 */
export default function Intro() {
  const [phase, setPhase] = useState<"in" | "out" | "gone">("in");

  useEffect(() => {
    const reduced =
      typeof matchMedia === "function" &&
      matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setPhase("gone");
      return;
    }

    document.documentElement.classList.add("od-intro-lock");
    const lift = setTimeout(() => setPhase("out"), 2050);
    const done = setTimeout(() => setPhase("gone"), 3000);
    // failsafe: the veil can never be left covering the page
    const bail = setTimeout(() => setPhase("gone"), 5000);

    return () => {
      clearTimeout(lift);
      clearTimeout(done);
      clearTimeout(bail);
      document.documentElement.classList.remove("od-intro-lock");
    };
  }, []);

  useEffect(() => {
    if (phase === "gone") {
      document.documentElement.classList.remove("od-intro-lock");
    }
  }, [phase]);

  if (phase === "gone") return null;

  return (
    <div
      className={`od-intro${phase === "out" ? " od-intro-out" : ""}`}
      aria-hidden="true"
    >
      <Wordmark className="od-intro-mark" />
    </div>
  );
}
