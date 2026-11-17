import StickerSlapFooter from "@/components/ui/sticker-slap-footer";
import Body from "@/components/Body";
import { site } from "@/site.config";

// Beranda: hero bergaya stiker. Semua teks bisa diubah di sini.
export default function Home() {
  return (
    <main>
      <h1 className="sr-only">{site.name}: e-book TI gratis, disusun dari yang termudah sampai tersulit</h1>
      <StickerSlapFooter
        wordmark="bintang"
        logo={site.name.toLowerCase()}
        homeHref="/"
        navLabel="baca"
        navHref="#jalur"
        chatHref="#"
        chatLabel="ada saran? kabari aku"
        jobsLabel="mulai belajar"
        jobs={[
          { title: "algoritma dasar", href: "/baca/algoritma" },
          { title: "logika matematika", href: "#jalur" },
          { title: "basis data", href: "#jalur" },
        ]}
        officeLabel="tentang web ini"
        address={["e-book TI gratis,", "dari yang termudah", "sampai tersulit."]}
        mapLabel="baca ceritaku"
        mapHref="#cerita"
        contactLabel="dari seorang mahasiswa"
        email=""
        note="*Ditulis sambil kuliah dan bekerja, supaya siapa pun bisa belajar TI, apa pun keadaannya."
        socials={[]}
        stickers={[
          { kind: "burst", text: "gratis" },
          "daisy",
          "star",
          "book",
          "smiley",
          { kind: "bubble", text: "halo!" },
          "heart",
        ]}
        credits={[
          { role: "ditulis oleh", name: "Raihan Abyan Rachman" },
          { role: "stiker", name: "digambar dengan kode, silakan digeser" },
        ]}
        panel="#2f4fd6"
        fontSans="'Plus Jakarta Sans Variable', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
      />
      <Body />
    </main>
  );
}
