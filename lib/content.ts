import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

// Isi e-book: file markdown di content/bab/<mapel>/<nomor>-<judul>.md
const ROOT = path.join(process.cwd(), "content", "bab");

export const mapelInfo: Record<string, { judul: string; deskripsi: string }> = {
  "tren-teknologi": {
    judul: "Tren Teknologi",
    deskripsi: "Mengenal dunia komputer dari dasar: perangkat keras, CPU, satuan data, internet, domain, dan perangkat lunak.",
  },
  "logika-matematika": {
    judul: "Logika Matematika",
    deskripsi: "Cara berpikir yang runtut: pernyataan, tabel kebenaran, hukum logika, inferensi, kuantor, dan pembuktian.",
  },
  algoritma: {
    judul: "Algoritma dan Dasar Pemrograman",
    deskripsi: "Belajar berpikir seperti komputer: dari apa itu algoritma sampai menyusun langkah penyelesaian masalah.",
  },
};

export type Bab = {
  mapel: string;
  slug: string;
  judul: string;
  ringkas: string;
  menit: number;
  diperbarui?: string; // YYYY-MM-DD
  isi: string;
};

export function semuaMapel(): string[] {
  if (!fs.existsSync(ROOT)) return [];
  return fs
    .readdirSync(ROOT, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);
}

export function babDi(mapel: string): Bab[] {
  const dir = path.join(ROOT, mapel);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .sort()
    .map((f) => {
      const raw = fs.readFileSync(path.join(dir, f), "utf8");
      const { data, content } = matter(raw);
      const kata = content.split(/\s+/).filter(Boolean).length;
      const tgl = data.diperbarui instanceof Date ? data.diperbarui.toISOString().slice(0, 10) : data.diperbarui ? String(data.diperbarui) : undefined;
      return {
        mapel,
        slug: f.replace(/\.md$/, ""),
        judul: String(data.judul ?? f),
        ringkas: String(data.ringkas ?? ""),
        menit: Math.max(1, Math.round(kata / 170)),
        diperbarui: tgl,
        isi: content,
      };
    });
}

export function satuBab(mapel: string, slug: string): { bab: Bab; sebelum?: Bab; sesudah?: Bab; nomor: number; total: number } | null {
  const semua = babDi(mapel);
  const i = semua.findIndex((b) => b.slug === slug);
  if (i < 0) return null;
  return { bab: semua[i], sebelum: semua[i - 1], sesudah: semua[i + 1], nomor: i + 1, total: semua.length };
}
