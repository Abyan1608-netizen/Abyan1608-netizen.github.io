---
judul: Pengantar Logika Matematika
ringkas: "Apa itu logika, dari mana asalnya, apa saja jenisnya, dan mengapa komputer sangat bergantung padanya."
diperbarui: 2026-11-19
---

Setiap hari kita menarik kesimpulan: "kalau hujan, jalanan basah." **Logika** adalah ilmu yang mengajarkan cara menarik kesimpulan seperti itu dengan benar, tidak sekadar menebak. Di komputer, logika adalah dasar dari hampir semua keputusan yang diambil sebuah program.

> **Setelah membaca bab ini, kamu bisa:** menjelaskan apa itu logika, menyebutkan jenis dan alirannya, mengenali kalimat deklaratif (proposisi), serta menyebutkan lima penghubung kalimat beserta simbolnya.

## Apa itu logika?

- **Logika** (*logic*) berasal dari kata Yunani **logos**. Logika adalah ilmu yang mempelajari prinsip-prinsip penalaran, yaitu cara menarik kesimpulan dari pernyataan secara **benar dan tepat (valid)**.
- Logika dipakai dalam matematika, sains, hukum, dan bidang lainnya.
- Logika berhubungan dengan **pernyataan**. Dalam logika hanya ada dua kemungkinan: **benar** atau **salah**.
- Komputer pun hanya mengenal dua keadaan: **True** atau **False**.

## Sejarah singkat logika

| Zaman | Tokoh | Sumbangan |
|---|---|---|
| Kuno | Parmenides dan Zeno (540–490 SM) | Memperkenalkan pemikiran rasional dan paradoks (pernyataan yang tampak berlawanan dengan anggapan umum), yang melahirkan kajian logika |
| Kuno | Aristoteles (384–322 SM) | Pemahaman yang benar harus didasarkan pada premis-premis yang valid dan kesimpulan yang logis |
| Pertengahan | Al-Farabi dan Ibnu Sina (sekitar abad ke-10 dan ke-11 M) | Menyempurnakan logika Aristoteles dan memadukannya ke dalam pemikiran Islam |
| Pertengahan | Petrus Hispanus, Roger Bacon, Raymundus Lullus, dan Wilhelm Ockham (abad ke-13 sampai ke-15) | Mengangkat kembali logika sebagai ilmu penting yang sejajar dengan ilmu-ilmu lainnya |
| Modern | George Boole | Menciptakan aljabar Boolean: simbol matematika untuk operasi logika seperti AND, OR, dan NOT |
| Modern | Gottlob Frege | Disebut bapak logika modern. Sistem logikanya menjadi dasar ilmu komputer dan kecerdasan buatan |

## Jenis-jenis logika

Secara umum, logika dibedakan menjadi **logika pasti** dan **logika tidak pasti**.

### Logika pasti

Digunakan untuk menyatakan dan menganalisis sesuatu berdasarkan nilai kebenaran yang pasti, yaitu **True** atau **False**.

**1. Logika pernyataan (*propositional logic*).** Pernyataan yang bernilai True atau False, dan hubungan antarpernyataan memakai operator logika seperti *and*, *or*, *not*, dan *if-then*.
Contoh: "4 dan 14 adalah bilangan genap" → **True**.

**2. Logika predikat (*predicate logic*).** Pernyataan yang mengandung objek, sifat, atau hubungan, serta memakai kuantor seperti **∀** (untuk semua) dan **∃** (ada).
Contoh: "Semua mahasiswa mengikuti perkuliahan" dan "Ada mahasiswa yang mendapat nilai A".

**3. Logika hubungan (*relation logic*).** Hubungan antara satu objek dengan objek lainnya berdasarkan aturan tertentu.
Contoh: "Budi lebih tinggi dari Andi".

**4. Logika himpunan (*set logic*).** Kumpulan objek (himpunan) dan hubungan antarhimpunan, seperti gabungan (∪), irisan (∩), dan komplemen.
Contoh: A = {1, 2, 3}; B = {3, 4, 5}; A ∩ B = {3}

### Logika tidak pasti

Digunakan untuk informasi yang samar, tidak tegas, atau punya tingkat kebenaran.

**Logika samar/kabur (*fuzzy logic*).** Suatu kondisi boleh punya tingkat kebenaran di antara 0 dan 1, tidak hanya 0 (salah) atau 1 (benar).
Contoh: "Adit memiliki kemampuan pemrograman yang baik" → seberapa baik? Misalnya tingkat kemampuannya 80%.

## Manfaat belajar logika

- Mengenal dan memakai bentuk-bentuk umum cara menarik kesimpulan yang sah, serta menghindari kesalahan yang sering terjadi.
- Memperpanjang rangkaian penalaran untuk menyelesaikan masalah yang lebih rumit.
- Mampu menganalisis suatu kejadian.

## Aliran logika

| Aliran | Inti | Contoh |
|---|---|---|
| **Tradisional** | Kumpulan aturan praktis sebagai petunjuk berpikir. Singkatnya, aturan berpikir yang benar untuk menarik kesimpulan | Semua mahasiswa yang rajin belajar memiliki peluang mendapat grade A. Rina rajin belajar. Maka, Rina memiliki peluang mendapat grade A |
| **Metafisis** | Susunan pemikiran dianggap kenyataan, sehingga logika dianggap metafisika (ilmu tentang hal-hal nonfisik atau yang tidak kelihatan). Singkatnya, hubungan pemikiran dengan hakikat kenyataan | Mitos |
| **Epistemologis** | Untuk mencapai pengetahuan yang memadai, pemikiran logis dan perasaan harus digabung. Singkatnya, memperoleh pengetahuan yang benar | Menyatakan cinta |
| **Instrumentalis/Pragmatis** | Logika dianggap sebagai alat (instrumen) untuk memecahkan masalah | Jarak rumah dengan kampus 12 km → naik transportasi umum |
| **Simbolis** | Menekankan penggunaan bahasa simbol untuk mempelajari secara rinci bagaimana akal harus bekerja | Lihat di bawah |

Contoh aliran simbolis:

```
P = Mahasiswa belajar
Q = Mahasiswa lulus
P ⇒ Q
```

Dibaca: *Jika mahasiswa belajar, maka mahasiswa lulus.*

Mulai bab berikutnya, kita akan memakai aliran **simbolis** ini.

## Dasar logika

### Kalimat deklaratif (proposisi)

**Kalimat deklaratif (proposisi)** adalah kalimat pernyataan yang memiliki nilai **benar** atau **salah**, tetapi tidak keduanya sekaligus.

Contoh:
- 2 + 2 = 4 (benar)
- 4 adalah bilangan prima (salah)

Pertanyaan ("Kamu sudah makan?") dan perintah ("Tutup pintunya!") bukan proposisi, karena tidak bisa dinilai benar atau salah.

### Penghubung kalimat

Proposisi bisa digabung memakai **penghubung kalimat**. Ada lima:

| Penghubung | Dibaca | Simbol |
|---|---|---|
| Konjungsi | dan | ∧ |
| Disjungsi | atau | ∨ |
| Implikasi | jika ..., maka ... | ⇒ |
| Biimplikasi | ... jika dan hanya jika ... | ⇔ |
| Negasi (not) | tidak | ¬ |

### Tabel kebenaran

**Tabel kebenaran** adalah tabel yang berisi hasil pemakaian penghubung kalimat, ditulis dengan simbol **True (T)** dan **False (F)**. Cara membuatnya dibahas di bab berikutnya.

## Logika dalam ilmu komputer

- **Sistem otomatisasi.** Gerbang tol dan palang parkir otomatis memutuskan "buka atau tetap tutup" berdasarkan kondisi yang dibaca sensor.
- **Aplikasi seluler.** Setiap aplikasi memakai kondisi seperti "jika kata sandi benar, maka masuk".

## Rangkuman

- Logika adalah ilmu tentang penalaran yang benar, dan berhubungan dengan pernyataan yang bernilai benar atau salah.
- **Kalimat deklaratif (proposisi)** adalah kalimat pernyataan yang bernilai benar saja atau salah saja, tidak sekaligus keduanya.
- Penghubung kalimat ada lima: **negasi (¬)**, **konjungsi (∧)**, **disjungsi (∨)**, **implikasi (⇒)**, dan **biimplikasi (⇔)**.

## Latihan singkat

1. Apakah "Tutup pintunya!" sebuah proposisi? Mengapa?
2. Tulis simbol untuk "dan", "atau", dan "tidak".
3. Tulis "Jika mahasiswa belajar, maka mahasiswa lulus" dengan simbol, bila P = Mahasiswa belajar dan Q = Mahasiswa lulus.

*Kunci: (1) Bukan, karena perintah tidak bisa dinilai benar atau salah. (2) ∧, ∨, ¬. (3) P ⇒ Q.*

---

*Bab ini disusun ulang dari Modul Perkuliahan Pertemuan 1 "Penghubung Kalimat", mata kuliah Logika Matematika (MI041), Fakultas Teknologi Informasi, Universitas Budi Luhur. Penjelasan disederhanakan untuk pembaca awam.*
