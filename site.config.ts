// Satu tempat untuk mengubah nama dan teks utama situs.
export const site = {
  name: "Taman Bintang", // ganti dengan nama pilihanmu
  // Alamat web yang sebenarnya. Isi lewat variabel NEXT_PUBLIC_SITE_URL saat build (lihat .env.example).
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://taman-bintang.pages.dev").replace(/\/$/, ""),
  author: "Raihan Abyan Rachman",
  locale: "id_ID",
  headline: "Tempat ilmu bermekar di bawah cahaya bintang.",
  tagline:
    "Catatan belajar mahasiswa Teknik Informatika kelas karyawan, disusun dari yang paling mudah ke yang paling sulit. Gratis untuk siapa saja.",
  nav: [
    { label: "Beranda", href: "/", ready: true },
    { label: "Perpustakaan", href: "/perpustakaan", ready: false },
    { label: "Jejak", href: "/jejak", ready: false },
    { label: "Tentang", href: "/tentang", ready: false },
  ],
};
