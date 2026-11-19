---
judul: Metode Inferensi
ringkas: "Delapan pola penarikan kesimpulan yang sah: modus ponens, modus tollens, silogisme, dilema, dan lainnya, lengkap dengan contoh dunia komputer."
diperbarui: 2026-11-19
---

Di bab ini kita belajar **menarik kesimpulan** dari beberapa pernyataan yang sudah diketahui. Polanya tetap, jadi kamu tinggal mengenali pola mana yang cocok.

> **Setelah membaca bab ini, kamu bisa:** menjelaskan istilah inferensi, hipotesa, dan kesimpulan, serta mengenali dan memakai delapan metode inferensi.

## Istilah penting

- **Inferensi** adalah proses menarik kesimpulan dari pernyataan-pernyataan yang sudah ada.
- **Argumen** adalah rangkaian pernyataan yang terdiri dari **hipotesa** (premis, yaitu pernyataan yang diketahui) dan **kesimpulan** (konklusi).
- Argumen disebut **valid** jika kesimpulannya pasti benar bila semua hipotesanya benar.
- Pada bentuk baku, hipotesa ditulis di atas garis, lalu kesimpulan ditulis di bawahnya dengan tanda **∴** (dibaca "jadi" atau "maka").

## 1. Modus Ponens

Bentuk:

```
P ⇒ Q
P
∴ Q
```

Artinya: jika "P ⇒ Q" benar dan P benar, maka Q pasti benar.

**Contoh**

```
Jika komputer dinyalakan, maka sistem operasi akan mulai berjalan
Komputer dinyalakan
∴ Sistem operasi akan mulai berjalan
```

## 2. Modus Tollens

Bentuk:

```
P ⇒ Q
¬Q
∴ ¬P
```

Artinya: jika "P ⇒ Q" benar dan Q salah, maka P pasti salah.

**Contoh**

```
Jika internet terhubung, maka website dapat dibuka
Website tidak dapat dibuka
∴ Internet tidak terhubung
```

## 3. Penambahan Disjungtif

Bentuk:

```
P
∴ P ∨ Q
```

Artinya: jika P benar, maka "P atau Q" pasti benar, apa pun nilai Q.

**Contoh**

```
Komputer terhubung ke jaringan Wi-Fi
∴ Komputer terhubung ke jaringan Wi-Fi atau LAN
```

## 4. Penyederhanaan Konjungtif

Bentuk:

```
P ∧ Q
∴ P
```

Artinya: jika "P dan Q" benar, maka P pasti benar (begitu juga Q).

**Contoh**

```
Budi menguasai bahasa pemrograman Python dan Java
∴ Budi menguasai bahasa pemrograman Python
```

## 5. Silogisme Disjungtif

Bentuk:

```
P ∨ Q
¬Q
∴ P
```

Artinya: jika "P atau Q" benar dan Q salah, maka P pasti benar.

**Contoh**

```
Database menggunakan MySQL atau PostgreSQL
Database tidak menggunakan PostgreSQL
∴ Database menggunakan MySQL
```

## 6. Silogisme Hipotesis

Bentuk:

```
P ⇒ Q
Q ⇒ R
∴ P ⇒ R
```

Artinya: dua implikasi yang "nyambung" bisa digabung menjadi satu.

**Contoh**

```
Jika mahasiswa memindai sidik jari, maka sistem absensi mencatat kehadiran
Jika sistem absensi mencatat kehadiran, maka mahasiswa dinyatakan hadir
∴ Jika mahasiswa memindai sidik jari, maka mahasiswa dinyatakan hadir
```

## 7. Inferensi Dilema

Bentuk:

```
P ∨ Q
P ⇒ R
Q ⇒ R
∴ R
```

Artinya: ada dua pilihan, dan **apa pun yang dipilih, hasilnya sama**.

**Contoh**

```
Pengguna memakai Windows atau Linux
Jika pengguna memakai Windows, maka web browser dapat dijalankan
Jika pengguna memakai Linux, maka web browser dapat dijalankan
∴ Web browser dapat dijalankan
```

## 8. Konjungsi

Bentuk:

```
P
Q
∴ P ∧ Q
```

Artinya: jika P benar dan Q benar, maka "P dan Q" benar.

**Contoh**

```
Pengguna memasukkan username yang benar
Pengguna memasukkan password yang benar
∴ Pengguna memasukkan username dan password yang benar
```

## Ringkasan delapan metode

| Metode | Hipotesa | Kesimpulan |
|---|---|---|
| Modus Ponens | P ⇒ Q; P | ∴ Q |
| Modus Tollens | P ⇒ Q; ¬Q | ∴ ¬P |
| Penambahan Disjungtif | P | ∴ P ∨ Q |
| Penyederhanaan Konjungtif | P ∧ Q | ∴ P |
| Silogisme Disjungtif | P ∨ Q; ¬Q | ∴ P |
| Silogisme Hipotesis | P ⇒ Q; Q ⇒ R | ∴ P ⇒ R |
| Inferensi Dilema | P ∨ Q; P ⇒ R; Q ⇒ R | ∴ R |
| Konjungsi | P; Q | ∴ P ∧ Q |

## Pemakaian dalam ilmu komputer

- **Pemrograman:** menentukan alur program berdasarkan kondisi.
- **Sistem keamanan:** memeriksa apakah syarat akses sudah terpenuhi.
- **Troubleshooting:** menelusuri penyebab masalah dari gejala yang tampak.
- **Kecerdasan buatan:** menarik kesimpulan otomatis dari aturan yang diketahui.

## Rangkuman

- Inferensi adalah menarik kesimpulan dari hipotesa; argumen valid bila kesimpulannya pasti benar jika semua hipotesanya benar.
- Ada delapan metode: modus ponens, modus tollens, penambahan disjungtif, penyederhanaan konjungtif, silogisme disjungtif, silogisme hipotesis, inferensi dilema, dan konjungsi.

## Latihan singkat

1. "Jika hujan, maka tanah basah. Tanah tidak basah." Apa kesimpulannya, dan metode apa yang dipakai?
2. "Kopi atau teh. Bukan teh." Apa kesimpulannya?

*Kunci: (1) Tidak hujan; modus tollens. (2) Kopi; silogisme disjungtif.*

---

*Bab ini disusun ulang dari Modul Perkuliahan Pertemuan 5 "Metode Inferensi", mata kuliah Logika Matematika (MI041), Fakultas Teknologi Informasi, Universitas Budi Luhur.*
