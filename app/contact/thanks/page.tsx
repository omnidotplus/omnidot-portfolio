import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Brief Received — Omnidot",
  description: "Thanks — your project brief has been received.",
};

export default function ThanksPage() {
  return (
    <main className="od-form-thanks">
      <h1 className="od-form-title">Got it.</h1>
      <p className="od-form-sub">
        Thanks for the detail — we&apos;ll read through your brief and get back to you by email
        shortly.
      </p>
      <Link href="/" className="od-wi-back">
        <span aria-hidden="true">←</span> Back home
      </Link>
    </main>
  );
}
