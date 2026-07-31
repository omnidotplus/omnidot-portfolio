"use client";

import { useId } from "react";

/**
 * The Omnidot wordmark, inline so the dot (a real <circle>) can be animated
 * by CSS. Rendered inline rather than as an <img> because an external SVG
 * exposes nothing to style — and fetching it broke entirely under file://.
 *
 * The gradient id is per-instance: the mark renders in the header, the footer
 * and the intro, and duplicate ids would make every copy reference the first.
 */
export default function Wordmark({ className = "" }: { className?: string }) {
  const gradId = useId().replace(/:/g, "");
  return (
    <svg
      className={`od-logo-svg ${className}`}
      viewBox="0 0 1080 500"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="Omnidot"
    >
      <defs>
        <linearGradient
          id={gradId}
          x1="155.21" y1="304.07" x2="155.21" y2="250.37"
          gradientTransform="translate(0 500) scale(1 -1)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#f15e26" />
          <stop offset="1" stopColor="#f12802" />
        </linearGradient>
      </defs>
      <path  d="M504.56,149.25c-26.82,0-50.93,11.92-66.92,30.88-16.26-18.96-40.37-30.88-67.19-30.88-48.49,0-87.78,39.28-87.78,87.78v112.97h41.72v-112.97c0-25.47,20.86-46.06,46.06-46.06s46.06,20.59,46.06,46.06v112.97h41.99v-112.97c0-25.47,20.59-46.06,46.06-46.06s46.06,20.59,46.06,46.06v112.97h41.72v-112.97c0-48.49-39.28-87.78-87.78-87.78h0Z" fill="#fff" />
      <path  d="M786.86,169.3c-17.61-12.73-39.28-20.05-62.85-20.05s-45.24,7.31-62.85,20.05c-25.2,18.15-41.72,47.41-41.72,80.19v100.51h41.72v-100.51c0-32.24,28.18-58.52,62.85-58.52s62.85,26.28,62.85,58.52v100.51h41.72v-100.51c0-32.78-16.26-62.04-41.72-80.19h0Z" fill="#fff" />
      <rect  x="855.67" y="149.25" width="41.72" height="200.75" fill="#fff" />
      <circle  cx="974.67" cy="249.63" r="50.19" fill="#fff" />
      <path  d="M155.21,149.25c-55.43,0-100.38,44.95-100.38,100.38s44.95,100.38,100.38,100.38,100.38-44.93,100.38-100.38-44.93-100.38-100.38-100.38h0ZM155.23,305.04c-30.62,0-55.41-24.81-55.41-55.41s24.79-55.41,55.41-55.41,55.39,24.81,55.39,55.41-24.79,55.41-55.39,55.41Z" fill={`url(#${gradId})`} />
    </svg>
  );
}
