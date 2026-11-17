---
judul: Konsep Dasar Algoritma
ringkas: Apa itu algoritma, apa bedanya dengan program, dan bagaimana menuliskannya lewat pseudocode dan flowchart.
diperbarui: 2026-11-04
---

Sebelum belajar menulis kode, ada satu kemampuan yang lebih dulu perlu kamu punya: **memecah pekerjaan jadi langkah-langkah yang jelas dan berurutan**. Itulah inti dari algoritma. Bab ini membahasnya dari nol, jadi tidak perlu pengalaman pemrograman sama sekali.

> **Setelah membaca bab ini, kamu bisa:** menjelaskan apa itu algoritma, mengenali lima ciri algoritma yang baik, membedakan algoritma, program, dan pseudocode, serta membaca dan menggambar flowchart sederhana.

## Algoritma itu apa?

Algoritma adalah **urutan langkah untuk menyelesaikan suatu pekerjaan**. Contoh paling dekat adalah resep mi instan:

1. Rebus air sampai mendidih.
2. Masukkan mi, tunggu tiga menit.
3. Tiriskan, lalu campur dengan bumbu.
4. Sajikan.

Kalau urutannya ditukar, misalnya bumbu dicampur sebelum air mendidih, hasilnya berantakan. Karena itu langkah dalam algoritma harus **tersusun logis**. Satu pekerjaan bisa selesai dalam satu langkah, dua langkah, atau ratusan langkah.

Dalam pelajaran pemrograman, yang mengerjakan pekerjaan itu adalah **komputer**. Tugas kita adalah memberi perintah yang cukup jelas, langkah demi langkah, karena komputer hanya melakukan persis apa yang diperintahkan, tidak lebih.

### Lima ciri algoritma yang baik

1. **Boleh ada atau tidak ada masukan (input)** dari luar.
2. **Minimal ada satu keluaran (output)**. Algoritma yang tidak menghasilkan apa-apa tidak berguna.
3. **Setiap instruksi jelas dan hanya punya satu arti.** "Tambahkan secukupnya" bukan instruksi yang baik untuk komputer.
4. **Pasti berhenti.** Kalau diikuti dari awal, harus ada titik selesainya.
5. **Setiap instruksi bisa dikerjakan dan efektif.** Misalnya `A = A + 0` bisa dikerjakan, tetapi tidak efektif karena tidak mengubah apa-apa.

## Program: algoritma yang dituliskan untuk komputer

**Program** adalah kumpulan instruksi untuk komputer, yang ditulis dalam **bahasa pemrograman** seperti Python, C, atau Java.

Cara mudah mengingatnya: algoritma adalah **idenya**, program adalah **ide itu yang ditulis dalam bahasa yang dimengerti komputer**. Satu algoritma bisa ditulis jadi program dalam bahasa apa saja.

## Pseudocode: algoritma dalam bahasa manusia

Sebelum menulis program, kita sering menuliskan langkahnya dulu dengan bahasa sehari-hari. Itu disebut **pseudocode** ("pseudo" artinya semu: bukan kode sungguhan, tetapi bentuknya mirip). Contoh, bagaimana cara masuk ke sebuah akun:

```
1. Buka halaman login
2. Isi nama pengguna
3. Isi kata sandi
4. Tekan tombol Masuk
5. Jika data benar, tampilkan halaman beranda
   Jika data salah, ulangi dari langkah 2
```

Perhatikan perbedaan bentuk penulisannya. Sama-sama menjelaskan langkah, tetapi satu ditulis ringkas ala kode, satu ditulis sebagai kalimat:

| Bentuk ringkas ala kode | Artinya dalam bahasa manusia |
| --- | --- |
| `A = A + 5` | Nilai A ditambah 5 |
| `IF A > 5 THEN WRITE(A)` | Tampilkan A, kalau nilainya lebih dari 5 |
| `WHILE A > 0: A = A - 2` | Kurangi A dengan 2 terus-menerus, sampai nilainya nol atau kurang |

Kamu belum perlu hafal bentuk di kolom kiri. Cukup tahu bahwa keduanya bisa menyatakan hal yang sama, dan nanti kamu akan terbiasa dengan bentuk ringkasnya.

## Flowchart: algoritma dalam bentuk gambar

**Flowchart** (diagram alur) menggambarkan algoritma dengan simbol dan panah yang menunjukkan arah alurnya. Untuk banyak orang, gambar lebih mudah dibaca daripada daftar langkah.

### Simbol-simbol flowchart

| Simbol | Nama | Dipakai untuk |
| --- | --- | --- |
| Oval (lonjong) | Terminal | Awal dan akhir algoritma ("Mulai" dan "Selesai") |
| Jajar genjang | Input/Output | Memasukkan data atau menampilkan hasil |
| Persegi panjang | Proses | Perhitungan atau pengolahan data |
| Belah ketupat | Keputusan | Pertanyaan yang jawabannya ya atau tidak |
| Panah | Alur | Menunjukkan langkah berikutnya |

### Aturan menggambar

- Alur umumnya digambar dari **atas ke bawah**.
- Semua simbol harus **terhubung dengan panah**.
- Flowchart selalu **diawali dan diakhiri** dengan simbol terminal.
- Simbol keputusan punya **dua jalur keluar**: satu untuk "ya", satu untuk "tidak".

## Contoh 1: menghitung luas persegi panjang

Soal: masukkan panjang dan lebar, lalu tampilkan luasnya.

**Pseudocode:**

```
1. Mulai
2. Baca nilai PANJANG
3. Baca nilai LEBAR
4. LUAS = PANJANG x LEBAR
5. Tampilkan LUAS
6. Selesai
```

**Flowchart:**

```flowchart
terminal: Mulai
io: Baca PANJANG dan LEBAR
proses: LUAS = PANJANG x LEBAR
io: Tampilkan LUAS
terminal: Selesai
```

Lihat bagaimana setiap baris pseudocode punya pasangan simbol di flowchart. Itulah sebabnya keduanya sering dipelajari bersama.

## Contoh 2: yang ada keputusannya

Kita kembali ke contoh masuk ke akun tadi. Bedanya, sekarang ada **pertanyaan** di tengah alur, dan jawabannya menentukan langkah berikutnya.

```flowchart
terminal: Mulai
io: Isi nama pengguna dan kata sandi
proses: Tekan tombol Masuk
tanya: Data benar? | tidak: ulangi isi data
io: Tampilkan halaman beranda
terminal: Selesai
```

Jalur **ya** turun ke bawah, jalur **tidak** keluar ke samping dan kembali ke langkah mengisi data. Pola "periksa, lalu pilih jalur" akan sangat sering kamu temui nanti saat belajar percabangan dan perulangan.

## Latihan

Kerjakan dulu di kertas sebelum melihat contoh jawabannya. Untuk setiap soal, buat **pseudocode** dan **flowchart**-nya.

1. Bagaimana cara mengirim pesan lewat aplikasi chat?
2. Bagaimana cara memeriksa email yang masuk?
3. Hitung dan tampilkan **luas persegi** dengan sisi 12.
4. Hitung dan tampilkan **keliling persegi panjang** dengan panjang 10 dan lebar 6.

### Contoh jawaban

Jawaban setiap orang boleh berbeda, selama langkahnya benar dan bisa menyelesaikan masalah.

**Soal 3, luas persegi:**

```
1. Mulai
2. SISI = 12
3. LUAS = SISI x SISI
4. Tampilkan LUAS
5. Selesai
```

**Soal 4, keliling persegi panjang:**

```
1. Mulai
2. PANJANG = 10
3. LEBAR = 6
4. KELILING = 2 x (PANJANG + LEBAR)
5. Tampilkan KELILING
6. Selesai
```

```flowchart
terminal: Mulai
proses: PANJANG = 10, LEBAR = 6
proses: KELILING = 2 x (PANJANG + LEBAR)
io: Tampilkan KELILING
terminal: Selesai
```

## Rangkuman

- **Algoritma** adalah langkah-langkah logis dan berurutan untuk menyelesaikan suatu pekerjaan.
- Algoritma yang baik punya output, instruksinya jelas, pasti berhenti, dan efektif.
- **Program** adalah algoritma yang ditulis dalam bahasa pemrograman.
- Algoritma bisa dituliskan sebagai **pseudocode** (bahasa manusia) atau **flowchart** (gambar).
- Setiap orang bisa menyusun algoritma yang berbeda untuk masalah yang sama, dan itu wajar selama hasilnya benar dan efisien.

---

*Bab ini disusun ulang dari Modul Perkuliahan #1 "Pengantar Algoritma", mata kuliah Analisis dan Desain Algoritma (PG167), Fakultas Teknologi Informasi, Universitas Budi Luhur (2019). Contoh, urutan penjelasan, dan latihan telah disesuaikan untuk pembaca pemula.*
