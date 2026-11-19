// Isi body. Daftar materi, semester, dan cerita kini disimpan di file JSON dan bisa diubah lewat halaman /admin.
import jalurData from "./jalur.json";
import ceritaData from "./cerita.json";

export type Jalur = {
  nomor: number; // 1 = paling mudah
  judul: string;
  deskripsi: string;
  tingkat: string;
  titik: number; // 1-4, tingkat kesulitan
  stiker: "book" | "daisy" | "star" | "bolt" | "heart";
  warna: string;
  status: "segera hadir" | "sedang ditulis" | "tersedia";
  href?: string;
  cta?: string;
};

export const jalur: Jalur[] = jalurData.jalur as Jalur[];

export const semester = jalurData.semester as { no: number; status: "sedang" | "selesai" | "menyusul" }[];

export const untukSiapa = [
  "mahasiswa",
  "yang kuliah sambil bekerja",
  "yang belum sempat kuliah",
  "muda atau tua",
  "siapa pun yang penasaran dengan TI",
];

export const marquee = ["gratis", "dari yang termudah", "untuk siapa saja", "kuliah sambil bekerja", "belajar pelan-pelan"];

export const cerita = ceritaData as { judul: string; paragraf: string[] };
