import * as React from "react";

/*
  Flowchart sederhana dari teks. Satu baris = satu simbol, dari atas ke bawah:
    terminal: Mulai
    io: Input panjang dan lebar
    proses: LUAS = panjang x lebar
    tanya: Apakah benar? | tidak: kembali ke langkah 2
*/

type Node = { jenis: "terminal" | "io" | "proses" | "tanya"; teks: string; tidak?: string };

const WARNA = { terminal: "#ffd23f", io: "#9ab8ff", proses: "#fffaf2", tanya: "#ffb6e1" } as const;
const INK = "#141414";

function parse(src: string): Node[] {
  return src
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean)
    .map((l) => {
      const i = l.indexOf(":");
      const jenis = l.slice(0, i).trim().toLowerCase() as Node["jenis"];
      const sisa = l.slice(i + 1).trim();
      if (jenis === "tanya") {
        const [teks, tidak] = sisa.split("|").map((s) => s.trim());
        return { jenis, teks, tidak: tidak?.replace(/^tidak:\s*/i, "") };
      }
      return { jenis, teks: sisa };
    });
}

function bungkus(t: string, max: number): string[] {
  const out: string[] = [];
  let cur = "";
  for (const w of t.split(" ")) {
    if ((cur + " " + w).trim().length > max && cur) {
      out.push(cur);
      cur = w;
    } else cur = (cur + " " + w).trim();
  }
  if (cur) out.push(cur);
  return out;
}

export default function Flowchart({ src }: { src: string }) {
  const nodes = parse(src);
  const adaTanya = nodes.some((n) => n.jenis === "tanya");
  const W = adaTanya ? 640 : 440;
  const cx = adaTanya ? 250 : 220;
  const GAP = 38;
  let y = 14;
  const els: React.ReactNode[] = [];

  nodes.forEach((n, k) => {
    const baris = bungkus(n.teks, n.jenis === "tanya" ? 20 : adaTanya ? 30 : 26);
    const h = n.jenis === "tanya" ? Math.max(130, 76 + baris.length * 25) : Math.max(58, 32 + baris.length * 27);
    const w = n.jenis === "tanya" ? 320 : n.jenis === "terminal" ? 210 : adaTanya ? 380 : 340;
    const x0 = cx - w / 2;
    let shape: React.ReactNode;
    if (n.jenis === "terminal") shape = <rect x={x0} y={y} width={w} height={h} rx={h / 2} fill={WARNA.terminal} stroke={INK} strokeWidth={2.5} />;
    else if (n.jenis === "io") {
      const s = 22;
      shape = <polygon points={`${x0 + s},${y} ${x0 + w},${y} ${x0 + w - s},${y + h} ${x0},${y + h}`} fill={WARNA.io} stroke={INK} strokeWidth={2.5} strokeLinejoin="round" />;
    } else if (n.jenis === "proses") shape = <rect x={x0} y={y} width={w} height={h} rx={6} fill={WARNA.proses} stroke={INK} strokeWidth={2.5} />;
    else shape = <polygon points={`${cx},${y} ${x0 + w},${y + h / 2} ${cx},${y + h} ${x0},${y + h / 2}`} fill={WARNA.tanya} stroke={INK} strokeWidth={2.5} strokeLinejoin="round" />;

    const ty = y + h / 2 - ((baris.length - 1) * 12.5) + 7;
    els.push(
      <g key={k}>
        {shape}
        <text x={cx} textAnchor="middle" fontSize={20} fontWeight={700} fill={INK}>
          {baris.map((b, i) => (
            <tspan key={i} x={cx} y={ty + i * 25}>
              {b}
            </tspan>
          ))}
        </text>
        {n.jenis === "tanya" && (
          <>
            <text x={cx + 12} y={y + h + 24} fontSize={18} fontWeight={800} fill={INK}>
              ya
            </text>
            <line x1={x0 + w} y1={y + h / 2} x2={x0 + w + 44} y2={y + h / 2} stroke={INK} strokeWidth={2.5} markerEnd="url(#panah)" />
            <text x={x0 + w + 6} y={y + h / 2 - 12} fontSize={18} fontWeight={800} fill={INK}>
              tidak
            </text>
            {n.tidak && (
              <text x={x0 + w + 52} y={y + h / 2 + 6} fontSize={17} fontWeight={600} fill={INK}>
                {bungkus(n.tidak, 13).map((b, i) => (
                  <tspan key={i} x={x0 + w + 52} y={y + h / 2 + 6 + i * 21}>
                    {b}
                  </tspan>
                ))}
              </text>
            )}
          </>
        )}
      </g>,
    );
    y += h;
    if (k < nodes.length - 1) {
      els.push(<line key={"a" + k} x1={cx} y1={y} x2={cx} y2={y + GAP} stroke={INK} strokeWidth={2.5} markerEnd="url(#panah)" />);
      y += GAP;
    }
  });

  const H = y + 16;
  return (
    <figure className="my-8 overflow-x-auto rounded-3xl border-2 border-ink bg-[#fffaf2] p-4 shadow-[6px_6px_0_0_#141414]">
      <svg viewBox={`0 0 ${W} ${H}`} className="mx-auto h-auto w-full"
        style={{ minWidth: adaTanya ? 560 : 340, maxWidth: W }} role="img" aria-label={"Diagram alur: " + nodes.map((n) => n.teks).join(", lalu ")}>
        <defs>
          <marker id="panah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0 0L10 5L0 10Z" fill={INK} />
          </marker>
        </defs>
        {els}
      </svg>
    </figure>
  );
}
