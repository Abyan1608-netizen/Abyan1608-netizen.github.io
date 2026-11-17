---
judul: Flowchart dan Modulus
ringkas: Menggambar alur dengan percabangan ya/tidak, memakai sisa bagi (modulus), dan berlatih membaca alur sebagai program.
diperbarui: 2026-11-04
---

Di bab sebelumnya kamu sudah mengenal flowchart. Sekarang kita memakainya sungguhan: menyelesaikan soal, memilih jalur dengan **pertanyaan ya/tidak**, dan berkenalan dengan satu operasi kecil yang sangat berguna, yaitu **modulus** (sisa bagi).

> **Setelah membaca bab ini, kamu bisa:** menggambar flowchart dengan percabangan, menghitung sisa bagi, mengubah potongan program menjadi flowchart, dan sebaliknya.

## Penyegaran: simbol dan aturan

Lima simbol yang kita pakai: **oval** (mulai dan selesai), **jajar genjang** (masukan atau keluaran), **persegi panjang** (proses atau perhitungan), **belah ketupat** (pertanyaan ya/tidak), dan **panah** (arah alur). Ada juga **konektor**, yaitu lingkaran kecil untuk menyambung flowchart yang terpotong, misalnya ketika alurnya terlalu panjang untuk satu halaman.

Aturannya tetap: gambar dari atas ke bawah, semua simbol terhubung panah, diawali dan diakhiri oval, dan belah ketupat punya dua jalur keluar (ya dan tidak).

## Modulus: sisa bagi

Modulus adalah **sisa dari pembagian bilangan bulat**. Operatornya adalah `%`.

Contoh cerita: Budi punya 20 kelereng dan ingin membaginya rata ke 3 temannya.

- Setiap teman mendapat berapa? `20 // 3 = 6` (pembagian bulat, tanpa sisa).
- Sisa kelereng Budi? `20 % 3 = 2`.

Beberapa contoh lain:

| Hitungan | Hasil | Alasannya |
| --- | --- | --- |
| `15 % 2` | 1 | 15 = 7 × 2, sisa 1 |
| `15 % 3` | 0 | 15 habis dibagi 3 |
| `15 % 4` | 3 | 15 = 3 × 4, sisa 3 |
| `7 % 15` | 7 | 7 lebih kecil dari 15, jadi semuanya jadi sisa |
| `0 % 2` | 0 | tidak ada yang tersisa |

> **Catatan:** untuk bilangan negatif, hasil modulus bisa berbeda antara satu bahasa pemrograman dan yang lain. Di bab ini kita memakai bilangan positif saja. Di Python, `//` adalah pembagian bulat, sedangkan `/` menghasilkan pecahan (`7 / 2` menghasilkan `3.5`).

Kegunaan paling terkenal dari modulus: **memeriksa ganjil atau genap**. Bilangan genap sisa baginya 0 ketika dibagi 2, sedangkan bilangan ganjil sisanya 1. Kita pakai ini sebentar lagi.

## Contoh 1: luas lingkaran

Soal: masukkan jari-jari, lalu tampilkan luas lingkarannya. Rumusnya luas = 3,14 × jari-jari × jari-jari.

```
1. Mulai
2. Siapkan JARI dan LUAS
3. Baca JARI
4. LUAS = 3.14 x JARI x JARI
5. Tampilkan LUAS
6. Selesai
```

```flowchart
terminal: Mulai
io: Baca JARI
proses: LUAS = 3.14 x JARI x JARI
io: Tampilkan LUAS
terminal: Selesai
```

Langkah "siapkan JARI dan LUAS" disebut **inisialisasi**: menyiapkan tempat untuk menyimpan nilai. Di flowchart sering digabung saja dengan langkah baca.

## Contoh 2: mana yang lebih besar?

Soal: masukkan dua bilangan bulat yang berbeda, lalu tampilkan yang **lebih besar**.

Kali ini ada **pertanyaan**: apakah A lebih besar dari B? Kalau ya, tampilkan A. Kalau tidak, tampilkan B. Dua jalur itu akhirnya bertemu lagi dan alur berakhir di satu tempat.

```flowchart
terminal: Mulai
io: Baca A dan B
tanya: A lebih besar dari B?
ya: io: Tampilkan A
tidak: io: Tampilkan B
terminal: Selesai
```

Perhatikan **titik temu** di bawah dua jalur itu. Apa pun jawabannya, alur selalu kembali ke satu garis dan berakhir di oval "Selesai".

## Contoh 3: ganjil atau bukan

Soal: masukkan sebuah bilangan bulat, lalu tampilkan kata **GANJIL** kalau bilangan itu ganjil.

Komputer tidak "melihat" ganjil atau genap seperti kita. Kita perlu cara mengujinya, dan di sinilah **modulus** berguna: bilangan itu ganjil kalau sisa baginya dengan 2 sama dengan 1.

```flowchart
terminal: Mulai
io: Baca BIL
tanya: BIL % 2 = 1 ?
ya: io: Tampilkan GANJIL
tidak:
terminal: Selesai
```

Di sini jalur "tidak" tidak melakukan apa-apa, jadi garisnya langsung lewat ke bawah. Itu boleh: tidak semua pertanyaan butuh dua tindakan.

## Contoh 4: dari program menjadi flowchart

Kamu juga perlu bisa membaca potongan program dan menggambarnya. Coba perhatikan program Python ini:

```python
A = 7
B = A // 2
C = A % 2
print(B)
print(C)
```

Baca baris demi baris: simpan 7 di A, hitung hasil bagi bulat A dibagi 2 ke B, hitung sisa bagi A dibagi 2 ke C, lalu tampilkan B dan C. Hasil yang tampil: **3** lalu **1**. Flowchart-nya:

```flowchart
terminal: Mulai
proses: A = 7
proses: B = A // 2
proses: C = A % 2
io: Tampilkan B
io: Tampilkan C
terminal: Selesai
```

## Contoh 5: dari flowchart menjadi program

Arah sebaliknya. Dari flowchart ini:

```flowchart
terminal: Mulai
proses: A = 7
proses: A = A // 2
proses: B = A x 2
proses: C = A - B
io: Tampilkan A, B, C
terminal: Selesai
```

Programnya dalam Python:

```python
A = 7
A = A // 2      # A sekarang 3
B = A * 2       # B menjadi 6
C = A - B       # C menjadi -3
print(A, B, C)
```

Yang tampil: `3 6 -3`. Perhatikan bahwa `A = A // 2` artinya "ambil nilai A yang lama, bagi dua, lalu simpan hasilnya kembali ke A". Tanda `=` di sini bukan "sama dengan" seperti di matematika, melainkan **"simpan ke"**.

## Latihan

Untuk soal 1 sampai 5, buat **algoritma dan flowchart**.

1. Hitung dan tampilkan luas segitiga dengan alas 8 dan tinggi 5. Rumus: ½ × alas × tinggi.
2. Hitung dan tampilkan volume bola dengan jari-jari 3. Rumus: 4/3 × 3,14 × jari-jari × jari-jari × jari-jari.
3. Hitung dan tampilkan sisi miring segitiga siku-siku dengan alas 3 dan tinggi 4, memakai rumus Pythagoras (sisi miring = akar dari alas² + tinggi²).
4. Masukkan dua bilangan bulat yang berbeda, lalu tampilkan yang **lebih kecil**.
5. Masukkan sebuah bilangan bulat, lalu tampilkan **GENAP** atau **GANJIL**.
6. Gambarlah flowchart dari program ini, lalu tebak apa yang tampil:

```python
A = 9
B = A // 4
C = A % 4
print(B, C)
```

7. Tuliskan program Python dari flowchart ini, lalu tebak hasilnya:

```flowchart
terminal: Mulai
proses: X = 10
proses: Y = X % 3
proses: Z = X // 3
io: Tampilkan Y, Z
terminal: Selesai
```

### Contoh jawaban

1. Luas = 0,5 × 8 × 5 = **20**.
2. Volume = 4/3 × 3,14 × 3 × 3 × 3 = **113,04**.
3. Sisi miring = akar(3² + 4²) = akar(25) = **5**.
4. Pertanyaannya "A lebih kecil dari B?". Kalau ya tampilkan A, kalau tidak tampilkan B. Bentuk flowchart-nya sama dengan Contoh 2.
5. Pertanyaannya "BIL % 2 = 1?". Jalur ya menampilkan GANJIL, jalur tidak menampilkan GENAP.
6. A = 9, B = 9 // 4 = 2, C = 9 % 4 = 1. Yang tampil: **2 1**.
7. `X = 10`, `Y = X % 3` menghasilkan 1, `Z = X // 3` menghasilkan 3. Yang tampil: **1 3**.

> **Tentang soal 2:** rumus 4 × π × r² yang kadang dipakai untuk "bola" sebenarnya adalah rumus **luas permukaan** bola. Rumus volume bola adalah 4/3 × π × r³. Hati-hati memilih rumus yang tepat.

## Rangkuman

- **Modulus** (`%`) adalah sisa bagi. `//` di Python adalah pembagian bulat.
- Bilangan ganjil punya sisa 1 saat dibagi 2, dan genap sisanya 0.
- Belah ketupat mewakili **pertanyaan**; jalur ya dan tidak bisa melakukan hal berbeda lalu bertemu lagi, atau salah satunya boleh kosong.
- Tanda `=` dalam pemrograman berarti **"simpan ke"**, bukan "sama dengan".
- Kamu perlu lancar membaca dua arah: program menjadi flowchart, dan flowchart menjadi program.

---

*Bab ini disusun ulang dari Modul Perkuliahan #2 "Flowchart", mata kuliah Analisis dan Desain Algoritma (PG167), Fakultas Teknologi Informasi, Universitas Budi Luhur (2019). Contoh dalam Python, penyesuaian soal, dan koreksi rumus ditambahkan untuk pembaca pemula.*
