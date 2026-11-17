import Link from "next/link";
import { notFound } from "next/navigation";
import { babDi, mapelInfo, semuaMapel } from "@/lib/content";
import { site } from "@/site.config";

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ mapel: string }> }) {
  const { mapel } = await params;
  const info = mapelInfo[mapel];
  return {
    title: info?.judul ?? mapel,
    description: info?.deskripsi,
    alternates: { canonical: `/baca/${mapel}` },
  };
}

export function generateStaticParams() {
  return semuaMapel().map((mapel) => ({ mapel }));
}

export default async function DaftarBab({ params }: { params: Promise<{ mapel: string }> }) {
  const { mapel } = await params;
  const bab = babDi(mapel);
  if (!bab.length) notFound();
  const info = mapelInfo[mapel];

  return (
    <div className="min-h-screen bg-paper text-ink">
      <header className="mx-auto flex max-w-5xl items-center justify-between px-5 py-5 text-lg font-bold md:px-8">
        <Link href="/" className="font-extrabold">
          ← {site.name}
        </Link>
      </header>
      <main className="mx-auto max-w-3xl px-5 pb-24 pt-8 md:px-0">
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">{info?.judul ?? mapel}</h1>
        {info && <p className="mt-5 text-xl leading-relaxed">{info.deskripsi}</p>}
        <ol className="mt-12 space-y-5">
          {bab.map((b, i) => (
            <li key={b.slug}>
              <Link
                href={`/baca/${mapel}/${b.slug}`}
                className="group grid grid-cols-[auto_1fr] items-center gap-5 rounded-[28px] border-2 border-ink bg-[#fffaf2] p-5 shadow-[6px_6px_0_0_#141414] transition-all hover:-translate-y-1 hover:shadow-[8px_10px_0_0_#141414]"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-ink bg-sun text-2xl font-extrabold">{i + 1}</span>
                <span>
                  <span className="block text-2xl font-extrabold">{b.judul}</span>
                  <span className="mt-1 block text-lg leading-relaxed">{b.ringkas}</span>
                  <span className="mt-2 block text-base font-bold">±{b.menit} menit baca</span>
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </main>
    </div>
  );
}
