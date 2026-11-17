"use client";

import * as React from "react";
import { StickerSvg, starPath } from "@/components/ui/sticker-slap-footer";
import ScriptHeading from "@/components/ScriptHeading";
import Reveal from "@/components/Reveal";
import { cerita, jalur, marquee, semester, untukSiapa } from "@/content/data";
import { site } from "@/site.config";

const STAR = starPath(5, 48, 22, 60, 62, 0.05, 2);

/* ---------- Pita berjalan ---------- */
function Marquee() {
  const row = [...marquee, ...marquee];
  return (
    <div className="overflow-hidden border-y-2 border-ink bg-tangerine py-3" aria-hidden="true">
      <div className="marquee flex w-max whitespace-nowrap text-2xl font-extrabold text-ink">
        {[0, 1].map((k) => (
          <div key={k} className="flex shrink-0 items-center">
            {row.map((t, i) => (
              <span key={i} className="flex items-center">
                <span className="px-6">{t}</span>
                <span className="text-xl">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Jalur belajar ---------- */
function Titik({ n }: { n: number }) {
  return (
    <span className="flex items-center gap-1" aria-label={`tingkat kesulitan ${n} dari 4`} role="img">
      {[1, 2, 3, 4].map((i) => (
        <span key={i} className={"h-3.5 w-3.5 rounded-full border-2 border-ink " + (i <= n ? "bg-ink" : "bg-transparent")} />
      ))}
    </span>
  );
}

function Jalur() {
  const [terbalik, setTerbalik] = React.useState(false);
  const list = terbalik ? [...jalur].reverse() : jalur;
  return (
    <section id="jalur" className="mx-auto max-w-6xl scroll-mt-6 px-5 py-20 md:px-8 md:py-28">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <ScriptHeading text="jalur belajar" className="w-[min(100%,440px)] text-ink" />
          <p className="mt-5 max-w-xl text-xl leading-relaxed">
            Disusun dari yang paling mudah. Mulai dari nomor 1, naik pelan-pelan, dan boleh melompat kalau kamu sudah paham.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setTerbalik((t) => !t)}
          className="self-start rounded-full border-2 border-ink bg-sun px-6 py-3 text-lg font-extrabold shadow-[4px_4px_0_0_#141414] transition hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_#141414] active:translate-y-0.5 active:shadow-none md:self-auto"
          aria-pressed={terbalik}
        >
          urutan: {terbalik ? "sulit → mudah" : "mudah → sulit"}
        </button>
      </div>

      <ol className="mt-12 flex flex-col gap-6">
        {list.map((j, i) => (
          <li key={j.nomor}>
            <Reveal delay={i * 90}>
              <article className="group relative grid items-center gap-5 rounded-[28px] border-2 border-ink bg-[#fffaf2] p-6 shadow-[6px_6px_0_0_#141414] transition-all hover:-translate-y-1 hover:shadow-[8px_10px_0_0_#141414] md:grid-cols-[auto_1fr_auto] md:gap-8 md:p-8">
                <div
                  className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-ink text-3xl font-extrabold"
                  style={{ background: j.warna }}
                  aria-label={`tingkat ${j.nomor}`}
                >
                  {j.nomor}
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold tracking-tight md:text-3xl">{j.judul}</h3>
                  <p className="mt-2 max-w-2xl text-lg leading-relaxed">{j.deskripsi}</p>
                  <div className="mt-5 flex flex-wrap items-center gap-3 text-base font-bold">
                    <span className="rounded-full bg-ink px-3.5 py-1 text-paper">tingkat: {j.tingkat}</span>
                    <Titik n={j.titik} />
                    <span className="rounded-full border-2 border-dashed border-ink px-3.5 py-1">{j.status}</span>
                    {j.href && (
                      <a
                        href={j.href}
                        className="rounded-full border-2 border-ink bg-sun px-4 py-1 font-extrabold shadow-[3px_3px_0_0_#141414] transition hover:-translate-y-0.5"
                      >
                        {j.cta ?? "baca"} →
                      </a>
                    )}
                  </div>
                </div>
                <div className="hidden w-24 rotate-6 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110 md:block">
                  <StickerSvg kind={j.stiker} />
                </div>
              </article>
            </Reveal>
          </li>
        ))}
        <li>
          <Reveal delay={400}>
            <div className="rounded-[28px] border-2 border-dashed border-ink px-6 py-6 text-center text-xl font-bold">
              dan masih banyak lagi. Bertambah setiap semester ✦
            </div>
          </Reveal>
        </li>
      </ol>
    </section>
  );
}

/* ---------- Jejak: satu bintang per semester ---------- */
function Bintang({ nyala }: { nyala: boolean }) {
  return (
    <svg viewBox="-4 -4 128 128" className={nyala ? "w-24 md:w-28" : "w-16 md:w-20"} aria-hidden="true">
      {nyala ? (
        <>
          <path d={STAR} fill="#fff" stroke="#fff" strokeWidth="12" strokeLinejoin="round" />
          <path d={STAR} fill="#ffd23f" />
          <path d="M44 40Q50 30 60 28" fill="none" stroke="#fff" strokeWidth="5" strokeLinecap="round" opacity=".85" />
          <ellipse cx="52" cy="68" rx="3.2" ry="5.2" fill="#1b1230" />
          <ellipse cx="68" cy="68" rx="3.2" ry="5.2" fill="#1b1230" />
          <path d="M52 79Q60 87 68 79" fill="none" stroke="#1b1230" strokeWidth="3.4" strokeLinecap="round" />
        </>
      ) : (
        <path d={STAR} fill="none" stroke="#fff" strokeWidth="4.5" strokeDasharray="2 11" strokeLinecap="round" strokeLinejoin="round" />
      )}
    </svg>
  );
}

function Jejak() {
  return (
    <section id="jejak" className="px-3 md:px-5">
      <div className="mx-auto max-w-[1400px] rounded-[28px] bg-cobalt px-5 py-16 text-paper md:rounded-[40px] md:px-12 md:py-24">
        <div className="mx-auto max-w-6xl">
          <ScriptHeading text="jejakku" className="w-[min(100%,300px)] text-paper" />
          <p className="mt-5 max-w-2xl text-xl leading-relaxed">
            Satu bintang untuk setiap semester. Baru satu yang menyala, dan aku akan menyalakan sisanya satu per satu, sampai langitnya penuh.
          </p>
          <Reveal className="mt-14">
            <ol className="-mx-2 flex items-end gap-2 overflow-x-auto px-2 pb-4 md:justify-between md:gap-0">
              {semester.map((s) => (
                <li key={s.no} className="flex min-w-[116px] flex-1 flex-col items-center gap-3 whitespace-nowrap">
                  <Bintang nyala={s.status === "sedang"} />
                  <span className="text-lg font-extrabold">semester {s.no}</span>
                  {s.status === "sedang" ? (
                    <span className="rounded-full bg-paper px-3 py-1 text-base font-bold text-ink">sedang dijalani</span>
                  ) : (
                    <span className="text-base font-semibold opacity-90">menyusul</span>
                  )}
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- Cerita ---------- */
function Cerita() {
  return (
    <section id="cerita" className="mx-auto max-w-6xl scroll-mt-6 px-5 py-20 md:px-8 md:py-28">
      <div className="grid gap-12 md:grid-cols-[1fr_1.1fr] md:gap-16">
        <Reveal>
          <ScriptHeading text="cerita" className="w-[min(100%,300px)] text-ink" />
          <h3 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight md:text-4xl">{cerita.judul}</h3>
          <div className="mt-8 flex max-w-sm gap-4">
            <div className="w-24 -rotate-6">
              <StickerSvg kind="heart" />
            </div>
            <div className="w-20 rotate-6 self-end">
              <StickerSvg kind="smiley" />
            </div>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="space-y-5 text-xl leading-relaxed">
            {cerita.paragraf.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <h4 className="mt-10 text-lg font-extrabold">web ini untuk:</h4>
          <ul className="mt-3 flex flex-wrap gap-3">
            {untukSiapa.map((t) => (
              <li key={t} className="rounded-full border-2 border-ink bg-[#fffaf2] px-4 py-1.5 text-lg font-bold">
                {t}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Ajakan penutup dan footer ---------- */
function Penutup() {
  return (
    <section className="px-3 pb-3 md:px-5 md:pb-5">
      <div className="mx-auto max-w-[1400px] overflow-hidden rounded-[28px] bg-ink px-6 py-16 text-center text-paper md:rounded-[40px] md:py-24">
        <Reveal>
          <ScriptHeading text="mulai dari sini" className="mx-auto w-[min(100%,520px)] text-sun" />
          <p className="mx-auto mt-6 max-w-xl text-xl leading-relaxed">Bab pertama sedang kutulis. Lihat dulu jalurnya, lalu pilih dari mana kamu ingin mulai.</p>
          <a
            href="#jalur"
            className="mt-9 inline-block rounded-full border-2 border-sun bg-sun px-8 py-4 text-xl font-extrabold text-ink transition hover:-translate-y-1 hover:bg-[#ffe27a]"
          >
            lihat jalur belajar
          </a>
        </Reveal>
      </div>
      <footer className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-3 px-4 py-8 text-base font-semibold md:flex-row">
        <span className="font-extrabold">{site.name}</span>
        <span>© 2026 Raihan Abyan Rachman. Gratis untuk dipelajari.</span>
      </footer>
    </section>
  );
}

export default function Body() {
  return (
    <>
      <Marquee />
      <Jalur />
      <Jejak />
      <Cerita />
      <Penutup />
    </>
  );
}
