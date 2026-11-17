import Link from "next/link";
import { notFound } from "next/navigation";
import Markdown from "@/components/Markdown";
import ReadingProgress from "@/components/ReadingProgress";
import { babDi, mapelInfo, satuBab, semuaMapel } from "@/lib/content";
import { site } from "@/site.config";

export const dynamicParams = false;

export function generateStaticParams() {
  return semuaMapel().flatMap((mapel) => babDi(mapel).map((b) => ({ mapel, bab: b.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ mapel: string; bab: string }> }) {
  const { mapel, bab } = await params;
  const d = satuBab(mapel, bab);
  if (!d) return {};
  const url = `/baca/${mapel}/${bab}`;
  return {
    title: d.bab.judul,
    description: d.bab.ringkas,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: d.bab.judul,
      description: d.bab.ringkas,
      locale: site.locale,
      siteName: site.name,
      modifiedTime: d.bab.diperbarui,
      authors: [site.author],
      images: [{ url: "/og.png", width: 1200, height: 630 }],
    },
  };
}

export default async function Halaman({ params }: { params: Promise<{ mapel: string; bab: string }> }) {
  const { mapel, bab } = await params;
  const d = satuBab(mapel, bab);
  if (!d) notFound();
  const info = mapelInfo[mapel];
  const tanggal = d.bab.diperbarui ? new Date(d.bab.diperbarui + "T00:00:00") : null;
  const tanggalTeks = tanggal?.toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" });
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: d.bab.judul,
    description: d.bab.ringkas,
    inLanguage: "id",
    dateModified: d.bab.diperbarui,
    author: { "@type": "Person", name: site.author },
    publisher: { "@type": "Organization", name: site.name, url: site.url },
    mainEntityOfPage: `${site.url}/baca/${mapel}/${bab}`,
    isPartOf: { "@type": "Course", name: info?.judul ?? mapel },
  };

  return (
    <div className="min-h-screen bg-paper text-ink">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ReadingProgress />
      <header className="mx-auto flex max-w-5xl items-center justify-between px-5 py-5 text-lg font-bold md:px-8">
        <Link href="/" className="font-extrabold">
          ← {site.name}
        </Link>
        <Link href={`/baca/${mapel}`} className="rounded-full border-2 border-ink bg-sun px-4 py-1.5">
          daftar bab
        </Link>
      </header>

      <main className="mx-auto max-w-[46rem] px-5 pb-24 pt-8 md:px-0">
        <p className="text-lg font-extrabold uppercase tracking-wide text-tangerine">{info?.judul ?? mapel}</p>
        <h1 className="mt-3 text-4xl font-extrabold leading-[1.1] tracking-tight md:text-6xl">{d.bab.judul}</h1>
        <div className="mt-6 flex flex-wrap gap-3 text-base font-bold">
          <span className="rounded-full bg-ink px-4 py-1.5 text-paper">
            bab {d.nomor} dari {d.total}
          </span>
          <span className="rounded-full border-2 border-ink px-4 py-1.5">±{d.bab.menit} menit baca</span>
          {tanggalTeks && <span className="rounded-full border-2 border-ink px-4 py-1.5">diperbarui {tanggalTeks}</span>}
        </div>

        <article className="mt-10 text-[1.22rem] font-medium leading-[1.85]">
          <Markdown>{d.bab.isi}</Markdown>
        </article>

        <nav className="mt-20 grid gap-4 md:grid-cols-2" aria-label="Pindah bab">
          {d.sebelum ? (
            <Link
              href={`/baca/${mapel}/${d.sebelum.slug}`}
              className="rounded-3xl border-2 border-ink bg-[#fffaf2] p-5 shadow-[5px_5px_0_0_#141414] transition hover:-translate-y-1"
            >
              <span className="text-base font-bold">← sebelumnya</span>
              <span className="mt-1 block text-xl font-extrabold">{d.sebelum.judul}</span>
            </Link>
          ) : (
            <span />
          )}
          {d.sesudah ? (
            <Link
              href={`/baca/${mapel}/${d.sesudah.slug}`}
              className="rounded-3xl border-2 border-ink bg-sun p-5 text-right shadow-[5px_5px_0_0_#141414] transition hover:-translate-y-1"
            >
              <span className="text-base font-bold">berikutnya →</span>
              <span className="mt-1 block text-xl font-extrabold">{d.sesudah.judul}</span>
            </Link>
          ) : (
            <div className="rounded-3xl border-2 border-dashed border-ink p-5 text-right text-lg font-bold md:col-start-2">
              Bab berikutnya sedang kutulis ✦
            </div>
          )}
        </nav>
      </main>
    </div>
  );
}
