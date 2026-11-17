"use client";

import * as React from "react";
import { layoutScript } from "@/components/ui/sticker-slap-footer";

/** Judul "tulisan tangan spidol" yang ditulis saat muncul di layar. Memakai huruf sambung bawaan hero. */
const STROKE = 3.3;
const SLANT = 0.1584;
const r2 = (v: number) => Math.round(v * 100) / 100;

export default function ScriptHeading({ text, className = "" }: { text: string; className?: string }) {
  const word = React.useMemo(() => layoutScript(text), [text]);
  const pad = STROKE / 2 + 0.6;
  const vbX = -1.4 - pad;
  const vbY = word.top - pad;
  const vbW = Math.max(word.width, 1) + 2.8 + pad * 2 - word.top * SLANT;
  const vbH = word.bottom + pad - vbY;

  const ref = React.useRef<SVGSVGElement>(null);
  const [len, setLen] = React.useState(0);
  const [on, setOn] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const path = el.querySelector("path");
    if (path) setLen(Math.ceil(path.getTotalLength()) + 2);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || typeof IntersectionObserver === "undefined") {
      setOn(true);
      return;
    }
    const io = new IntersectionObserver(
      (e) => {
        if (e.some((x) => x.isIntersecting)) {
          setOn(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [text]);

  const drawn = len === 0 || on; // sebelum diukur, tampil penuh agar aman tanpa JS
  return (
    <svg
      ref={ref}
      role="img"
      aria-label={text}
      viewBox={[vbX, vbY, vbW, vbH].map(r2).join(" ")}
      className={"block h-auto overflow-visible " + className}
    >
      <g transform="skewX(-9)">
        <path
          d={word.main + word.extra.join("")}
          fill="none"
          stroke="currentColor"
          strokeWidth={STROKE}
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            strokeDasharray: len ? `${len} ${len + 8}` : undefined,
            strokeDashoffset: drawn ? 0 : len + 4,
            transition: "stroke-dashoffset 1.6s cubic-bezier(.55,.1,.35,1)",
          }}
        />
      </g>
    </svg>
  );
}
