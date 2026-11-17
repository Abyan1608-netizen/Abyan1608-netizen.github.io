"use client";

import * as React from "react";

/** Muncul pelan saat masuk layar. Tanpa JS atau dengan reduced-motion, langsung terlihat. */
export default function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [state, setState] = React.useState<"ssr" | "hidden" | "shown">("ssr");

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || typeof IntersectionObserver === "undefined") {
      setState("shown");
      return;
    }
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight * 0.9) {
      setState("shown");
      return;
    }
    setState("hidden");
    const io = new IntersectionObserver(
      (e) => {
        if (e.some((x) => x.isIntersecting)) {
          setState("shown");
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={
        "transition-all duration-700 ease-out " +
        (state === "hidden" ? "translate-y-8 opacity-0 " : "translate-y-0 opacity-100 ") +
        className
      }
      style={{ transitionDelay: state === "shown" ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}
