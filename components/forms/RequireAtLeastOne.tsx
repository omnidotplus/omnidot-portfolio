"use client";

import { useEffect, useRef } from "react";

/**
 * There is no native HTML equivalent of `required` for "check at least one
 * box in this group" — only radio groups get that for free. This fills the
 * gap with the Constraint Validation API instead of a submit interceptor:
 * the form is still a plain POST, this just makes the browser's own
 * validation (the same one that blocks a missing `required` text field)
 * also block an empty required checkbox group, with the same native message
 * bubble the rest of the form already uses.
 */
export default function RequireAtLeastOne({ groupName }: { groupName: string }) {
  const anchor = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const form = anchor.current?.closest("form");
    if (!form) return;

    const boxes = Array.from(
      form.querySelectorAll<HTMLInputElement>(`input[type="checkbox"][name="${groupName}"]`)
    );
    if (!boxes.length) return;

    const sync = () => {
      const anyChecked = boxes.some((b) => b.checked);
      boxes.forEach((b) =>
        b.setCustomValidity(anyChecked ? "" : "Select at least one option.")
      );
    };

    sync();
    boxes.forEach((b) => b.addEventListener("change", sync));
    return () => boxes.forEach((b) => b.removeEventListener("change", sync));
  }, [groupName]);

  return <span ref={anchor} hidden />;
}
