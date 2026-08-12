import { animate } from "framer-motion";

import type { MouseEvent } from "react";

export const SCROLL_OFFSET = 80;

export function smoothScrollToId(id: string): void {
  const el = document.getElementById(id);
  if (!el) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    el.scrollIntoView({ behavior: "auto", block: "start" });
    return;
  }

  const targetY = Math.max(
    0,
    el.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET
  );

  if (Math.abs(targetY - window.scrollY) < 1) return;

  animate(window.scrollY, targetY, {
    duration: 0.8,
    ease: [0.16, 1, 0.3, 1],
    onUpdate: (v) => window.scrollTo(0, v),
    onComplete: () => history.replaceState(null, "", "#" + id),
  });
}

export function interceptAnchorClick(
  e: MouseEvent<HTMLAnchorElement>
): void {
  const href = e.currentTarget.getAttribute("href");
  if (!href || !href.startsWith("#") || href === "#") return;

  const id = href.slice(1);
  if (!id) return;

  e.preventDefault();
  smoothScrollToId(id);
}