import Link from "next/link";
import { site } from "@/site.config";

export const metadata = { title: "Halaman tidak ditemukan" };

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-paper px-6 text-center text-ink">
      <p className="text-8xl font-extrabold text-tangerine">404</p>
      <h1 className="mt-4 text-3xl font-extrabold md:text-5xl">Halaman ini belum ada</h1>
      <p className="mt-4 max-w-md text-xl leading-relaxed">Mungkin alamatnya keliru, atau bab ini masih kutulis.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link href="/" className="rounded-full border-2 border-ink bg-sun px-6 py-3 text-lg font-extrabold shadow-[4px_4px_0_0_#141414]">
          ke beranda {site.name}
        </Link>
        <Link href="/baca/algoritma" className="rounded-full border-2 border-ink px-6 py-3 text-lg font-extrabold">
          lihat daftar bab
        </Link>
      </div>
    </main>
  );
}
