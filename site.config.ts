// Satu tempat untuk mengubah nama dan teks utama situs.
export const site = {
  name: "Taman Bintang", // ganti dengan nama pilihanmu
  // Alamat web yang sebenarnya. Isi lewat variabel NEXT_PUBLIC_SITE_URL saat build (lihat .env.example).
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://abyan1608-netizen.github.io").replace(/\/$/, ""),
  author: "Raihan Abyan Rachman",
  locale: "id_ID",
  headline: "Tempat ilmu bermekar di bawah cahaya bintang.",
  tagline:
    "Catatan belajar mahasiswa Teknik Informatika kelas karyawan, disusun dari yang paling mudah ke yang paling sulit. Gratis untuk siapa saja.",
  // Tombol "ada saran?". Sementara memakai halaman Issue GitHub (publik, tanpa data apa pun yang disimpan di web ini).
  // Bisa diganti nanti dengan tautan Google Form.
  saranUrl:
    "https://github.com/Abyan1608-netizen/Abyan1608-netizen.github.io/issues/new?title=" +
    encodeURIComponent("Saran untuk web") +
    "&body=" +
    encodeURIComponent("Tulis saran atau koreksimu di sini.\n\nJangan menulis data pribadi (nomor HP, kata sandi, alamat)."),
  nav: [
    { label: "Beranda", href: "/", ready: true },
    { label: "Perpustakaan", href: "/perpustakaan", ready: false },
    { label: "Jejak", href: "/jejak", ready: false },
    { label: "Tentang", href: "/tentang", ready: false },
  ],
};
