"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";

// Scroll depth as % of the page reached.
const SCROLL_MILESTONES = [25, 50, 75, 100];
// Engaged time in seconds (only counts while the tab is actually visible).
const TIME_MILESTONES = [15, 30, 60, 120, 300];

/**
 * Fires Vercel Web Analytics custom events for engagement:
 *  - `scroll_depth` { depth: "25%" | "50%" | ... } once per milestone
 *  - `engaged_time` { threshold: "15s" | "30s" | ... } once per milestone
 *
 * Milestones (rather than raw values) so the Analytics "Events" tab reads as a
 * funnel: how many visitors got past 50% / stayed longer than 60s, etc.
 */
export function Engagement() {
  useEffect(() => {
    // --- Scroll depth ---
    const firedScroll = new Set<number>();
    const onScroll = () => {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - doc.clientHeight;
      if (scrollable <= 0) return;
      const pct = (doc.scrollTop / scrollable) * 100;
      for (const m of SCROLL_MILESTONES) {
        if (pct >= m && !firedScroll.has(m)) {
          firedScroll.add(m);
          track("scroll_depth", { depth: `${m}%` });
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // catch short pages / restored scroll position

    // --- Engaged time (paused while the tab is hidden) ---
    const firedTime = new Set<number>();
    let seconds = 0;
    const interval = window.setInterval(() => {
      if (document.visibilityState !== "visible") return;
      seconds += 1;
      for (const m of TIME_MILESTONES) {
        if (seconds >= m && !firedTime.has(m)) {
          firedTime.add(m);
          track("engaged_time", { threshold: `${m}s` });
        }
      }
    }, 1000);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.clearInterval(interval);
    };
  }, []);

  return null;
}
