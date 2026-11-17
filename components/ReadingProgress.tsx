"use client";

import * as React from "react";

/** Garis kemajuan baca di tepi atas layar. */
export default function ReadingProgress() {
  const [p, setP] = React.useState(0);
  React.useEffect(() => {
    const on = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setP(h > 0 ? Math.min(1, window.scrollY / h) : 0);
    };
    on();
    addEventListener("scroll", on, { passive: true });
    addEventListener("resize", on);
    return () => {
      removeEventListener("scroll", on);
      removeEventListener("resize", on);
    };
  }, []);
  return (
    <div className="fixed inset-x-0 top-0 z-50 h-1.5 bg-ink/10" aria-hidden="true">
      <div className="h-full origin-left bg-tangerine" style={{ transform: `scaleX(${p})` }} />
    </div>
  );
}
