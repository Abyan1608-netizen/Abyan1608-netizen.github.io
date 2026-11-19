---
judul: Kuantor
ringkas: "Kata 'semua' dan 'ada' dalam simbol logika (∀ dan ∃), cara menegasikannya, dan kuantor ganda, dengan contoh di database."
diperbarui: 2026-11-19
---

Sampai sekarang kita membahas pernyataan tunggal. Bagaimana dengan "**semua** mahasiswa punya NIM" atau "**ada** mahasiswa yang nilainya di atas 80"? Kata "semua" dan "ada" dipegang oleh **kuantor**.

> **Setelah membaca bab ini, kamu bisa:** menjelaskan kuantor universal (∀) dan eksistensial (∃), menegasikan pernyataan berkuantor, dan membaca kuantor ganda.

## Apa itu kuantor?

**Kuantor** adalah kata atau simbol dalam logika yang menyatakan **banyaknya atau cakupan objek** dalam suatu pernyataan, yaitu seberapa banyak elemen yang tercakup. Kuantor membantu menentukan apakah suatu pernyataan berlaku untuk **semua** objek atau hanya untuk **beberapa** objek dalam suatu himpunan.

## Kuantor universal (∀)

- Menyatakan bahwa suatu pernyataan berlaku untuk **semua** objek dalam domain pembicaraan.
- Simbol: **∀**
- Dibaca: *Semua ...*, *Setiap ...*

**Contoh:** *Setiap hewan dapat bergerak*

```
∀      x        p
(kuantor) (objek) (predikat)
```

Penulisan: **(∀x) p(x)**

**Contoh di database**

| NIM | Nama | Nilai |
|---|---|---|
| 101 | Andi | 85 |
| 102 | Budi | 75 |
| 103 | Citra | 90 |
| 104 | Dinda | 66 |

*Semua mahasiswa memiliki NIM* → **(∀x) p(x)**

Dalam database:

```sql
SELECT * FROM Mahasiswa;
```

## Kuantor eksistensial (∃)

- Menyatakan bahwa suatu pernyataan berlaku untuk **setidaknya satu** objek dalam domain pembicaraan.
- Simbol: **∃**
- Dibaca: *Beberapa ...*, *Paling sedikit satu ...*, *Ada ...*

**Contoh:** *Beberapa hewan di laut bernapas dengan paru-paru*

```
∃      y        q
(kuantor) (objek) (predikat)
```

Penulisan: **(∃y) q(y)**

**Contoh di database** (tabel yang sama)

*Minimal ada satu mahasiswa yang memperoleh nilai lebih besar dari 80* → **(∃y) q(y)**

Dalam database:

```sql
SELECT * FROM Mahasiswa WHERE Nilai > 80;
```

## Ingkaran (negasi) kuantor

**Ingkaran kuantor** adalah penyangkalan terhadap pernyataan berkuantor, baik universal maupun eksistensial. Fungsinya mengubah pernyataan tentang **semua** objek menjadi pernyataan tentang **setidaknya satu** objek yang tidak memenuhi syarat, atau sebaliknya.

### Ingkaran kuantor universal

Ingkaran dari "semua x bersifat p(x)" adalah "ada x yang tidak bersifat p(x)".

**¬((∀x ∈ D) p(x)) ≡ (∃x ∈ D) ¬p(x)**

Tidak benar bahwa semua objek memenuhi kondisi berarti terdapat setidaknya satu objek yang tidak memenuhi kondisi tersebut.

### Ingkaran kuantor eksistensial

Ingkaran dari "ada x yang bersifat q(x)" adalah "semua x tidak bersifat q(x)".

**¬((∃x ∈ D) q(x)) ≡ (∀x ∈ D) ¬q(x)**

Tidak ada satu pun objek yang memenuhi kondisi berarti semua objek tidak memenuhi kondisi tersebut.

Ringkasnya, saat dinegasikan: **∀ berubah menjadi ∃**, **∃ berubah menjadi ∀**, dan predikatnya dinegasikan.

## Kuantor ganda

**Kuantor ganda** adalah pernyataan logika yang memakai **dua kuantor atau lebih** (universal maupun eksistensial) dalam satu ekspresi.

**Contoh:** *Untuk setiap bilangan positif ada bilangan positif lain yang lebih kecil darinya*

Permisalan: terdapat bilangan positif y sedemikian sehingga y < x

Hasil:

```
(∀ bil. Positif x) (∃ bil. Positif y) y < x
```

## Pemakaian dalam ilmu komputer

Kuantor dipakai untuk merumuskan aturan algoritma, memvalidasi data dalam database, serta menentukan kondisi dan hubungan logis dalam sistem komputasi.

## Rangkuman

- **∀** berarti "semua/setiap"; **∃** berarti "ada/paling sedikit satu".
- Ingkaran: **¬(∀x) p(x) ≡ (∃x) ¬p(x)** dan **¬(∃x) q(x) ≡ (∀x) ¬q(x)**.
- Kuantor ganda memakai dua kuantor atau lebih dalam satu pernyataan.

## Latihan singkat

1. Tuliskan negasi dari "Semua mahasiswa memiliki NIM".
2. Tuliskan negasi dari "Ada mahasiswa yang nilainya di atas 80".

*Kunci: (1) Ada mahasiswa yang tidak memiliki NIM. (2) Semua mahasiswa nilainya tidak di atas 80.*

---

*Bab ini disusun ulang dari Modul Perkuliahan Pertemuan 6 "Kuantor", mata kuliah Logika Matematika (MI041), Fakultas Teknologi Informasi, Universitas Budi Luhur.*
