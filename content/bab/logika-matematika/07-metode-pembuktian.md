---
judul: Metode Pembuktian
ringkas: "Cara membuktikan bahwa suatu pernyataan benar: pembuktian langsung (satu per satu, permisalan, ekuivalensi) dan tidak langsung (kontradiksi, kontraposisi)."
diperbarui: 2026-11-19
---

**Metode pembuktian** adalah cara yang sistematis untuk menunjukkan bahwa suatu pernyataan benar, berdasarkan definisi, aksioma, aturan logika, atau teorema yang sudah diketahui. Dengan pembuktian, sebuah kesimpulan tidak sekadar dugaan, tetapi punya alasan logis yang bisa dipertanggungjawabkan.

> **Setelah membaca bab ini, kamu bisa:** membedakan pembuktian langsung dan tidak langsung, serta memakai kelima caranya pada contoh sederhana.

Ada dua kelompok metode:

1. Secara **langsung**
2. Secara **tidak langsung**

## Pembuktian secara langsung

Disebut juga *direct proof*. Dilakukan dengan memakai fakta atau asumsi yang diketahui untuk sampai pada kesimpulan yang ingin dibuktikan. Ada tiga cara:

1. Pembuktian satu per satu
2. Pembuktian permisalan
3. Pembuktian dengan ekuivalensi

### 1. Pembuktian satu per satu

Pembuktian dimulai dari kondisi awal yang diketahui dan diakhiri pada kondisi akhir yang juga diketahui. Langkah-langkah di antara keduanya diperiksa **berurutan**. Singkatnya: **batas awal dan batas akhir diketahui**.

**Contoh.** Buktikan bahwa untuk semua bilangan genap n antara 4 dan 30, n dapat dinyatakan sebagai jumlahan 2 bilangan prima.

**Jawab**

n = {4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30}

```
4 = 2 + 2     12 = 5 + 7     20 = 13 + 7     28 = 23 + 5
6 = 3 + 3     14 = 7 + 7     22 = 19 + 3     30 = 23 + 7
8 = 5 + 3     16 = 5 + 11    24 = 19 + 5
10 = 5 + 5    18 = 11 + 7    26 = 19 + 7
```

2, 3, 5, 7, 11, 13, 19, dan 23 merupakan bilangan prima, maka **terbukti (valid)** bahwa semua bilangan genap n antara 4 dan 30 dapat dinyatakan sebagai jumlahan 2 bilangan prima.

### 2. Pembuktian permisalan

Pembuktian dimulai dari kondisi atau asumsi awal yang diketahui. Namun bentuk akhirnya belum diketahui langsung, sehingga dipakai **permisalan atau variabel** untuk mengembangkan pembuktian. Singkatnya: **batas awal diketahui tetapi batas akhir tidak diketahui**, atau sebaliknya.

**Contoh.** Buktikan bahwa untuk sembarang bilangan riil x, jika |x| > 4 maka x² > 16.

**Jawab**

```
x ∈ ℝ
|x| > 4  berarti  x > 4  atau  x < -4

-∞ ----- -4 ----- 0 ----- 4 ----- ∞
```

- x > 4, maka x² > 4² = 16
- x < -4, maka x² > (-4)² = 16

**Terbukti (valid)** bahwa jika |x| > 4 maka x² > 16.

### 3. Pembuktian dengan ekuivalensi

Menyusun rangkaian pernyataan yang ekuivalen sampai hubungan logis antarpernyataan dapat ditunjukkan. Singkatnya: **batas awal dan batas akhir tidak diketahui**.

**Contoh.** Buktikan ekuivalensi dari:

*Misalkan a dan b adalah bilangan bulat. a dan b mempunyai sisa yang sama jika dibagi dengan bilangan positif n, bila dan hanya bila (a − b) habis dibagi n.*

**Jawab**

```
a = bilangan bulat
b = bilangan bulat
n = bilangan positif

P = a dan b mempunyai sisa yang sama jika dibagi dengan bilangan positif n
Q = (a − b) habis dibagi n

a dan b mempunyai sisa yang sama jika dibagi dengan bilangan positif n,
bila dan hanya bila (a − b) habis dibagi n

P ⇔ Q ≡ (P ⇒ Q) ∧ (Q ⇒ P)
```

Jadi kita buktikan dua arah.

**P ⇒ Q** (Jika a dan b dibagi dengan bilangan positif n mempunyai sisa yang sama, maka (a − b) habis dibagi n)

```
1
a/n = k + s/n
a = nk + s

2
b/n = l + s/n
b = nl + s

3
(a − b)/n = h
a − b = nk + s − (nl + s)
a − b = nk + s − nl − s
a − b = nk − nl
a − b = n(k − l)
a − b = n · h

4
(a − b)/n = h
(a − b)/n = (n · h)/n
(a − b)/n = h

∴ P ⇒ Q terbukti (true)
```

**Q ⇒ P** (Jika (a − b) habis dibagi n, maka a dan b dibagi dengan bilangan positif n mempunyai sisa yang sama)

Pada langkah pertama, kedua, dan ketiga, kita memiliki:

```
1. a = n · k + s     (variabel P)
2. b = n · l + s     (variabel P)
3. a − b = n · h     (variabel Q)
```

```
5
Eksekusi langkah kedua terhadap langkah ketiga

a − b = n · h
a = n · h + b
a = n · h + n · l + s
a = n (h + l) + s
a = n · k + s

Catatan: pada langkah ketiga, kita telah membuat k − l = h, maka k = h + l

∴ Q ⇒ P terbukti (true)
```

```
6
Kesimpulan

P ⇔ Q ≡ (P ⇒ Q) ∧ (Q ⇒ P)

P ⇒ Q terbukti (true)
Q ⇒ P terbukti (true)

maka
(P ⇒ Q) ∧ (Q ⇒ P)
true ∧ true
terbukti (true)
```

## Pembuktian secara tidak langsung

Pembuktian dilakukan lewat **penyangkalan** atau **perubahan bentuk** pernyataan yang ingin dibuktikan. Dipakai ketika pembuktian langsung sulit dilakukan. Ada dua cara:

1. Pembuktian dengan kontradiksi
2. Pembuktian dengan kontraposisi

### 1. Pembuktian dengan kontradiksi

Dilakukan dengan mengasumsikan bahwa pernyataan yang ingin dibuktikan **salah**, lalu menunjukkan bahwa asumsi itu menghasilkan pertentangan atau sesuatu yang mustahil.

Langkah-langkahnya:

1. Buat negasi dari pernyataan yang ada.
2. Dengan satu formulasi, buat negasi tersebut sampai pada kontradiksi.
3. Simpulkan bahwa pernyataan awal yang benar.

**Contoh.** Buktikan bahwa tidak ada bilangan bulat yang terbesar!

**Jawab**

- Misalkan ada bilangan bulat yang terbesar (N). Karena N terbesar, maka N ≥ n untuk semua bilangan bulat n.
- Asumsikan M = N + 1. Karena N bilangan bulat, maka M juga bilangan bulat.
- Maka ditemui M > N, padahal N dikatakan terbesar. Ini bertentangan.

**Kesimpulan:** Terbukti bahwa tidak ada bilangan bulat yang terbesar.

### 2. Pembuktian dengan kontraposisi

Berasal dari suatu implikasi, dan implikasi bernilai sama dengan kontraposisinya: **P ⇒ Q ≡ ¬Q ⇒ ¬P**.

**Contoh.** Buktikan bahwa untuk bilangan-bilangan bulat m dan n, jika m + n ≥ 73 maka m ≥ 37 atau n ≥ 37.

**Diketahui**

```
P = m + n ≥ 73
Q = m ≥ 37
R = n ≥ 37
```

**Jawab**

Jika m + n ≥ 73 maka m ≥ 37 atau n ≥ 37.

Ubah menjadi bentuk simbol dari kalimat implikasi di atas:

```
P ⇒ (Q ∨ R)
```

Kontraposisi:

```
¬(Q ∨ R) ⇒ ¬P ≡ ¬Q ∧ ¬R ⇒ ¬P
```

Terapkan kontraposisi dengan nilai variabelnya:

```
Q = m ≥ 37      R = n ≥ 37      P = m + n ≥ 73
¬Q = m ≤ 36     ¬R = n ≤ 36     ¬P = m + n ≤ 72
```

**Kesimpulan:** Terbukti (valid), karena nilai implikasi sama dengan nilai kontraposisinya.

## Pemakaian dalam ilmu komputer

Metode pembuktian membantu membuktikan kebenaran algoritma, mendeteksi kesalahan program, memvalidasi data dan aturan database, serta menjamin keamanan dan keandalan sistem.

## Rangkuman

- **Pembuktian langsung:** satu per satu (batas awal dan akhir diketahui), permisalan (salah satu batas diketahui), dan ekuivalensi (kedua batas tidak diketahui).
- **Pembuktian tidak langsung:** kontradiksi (anggap salah, temukan pertentangan) dan kontraposisi (buktikan ¬Q ⇒ ¬P).

## Latihan singkat

1. Pembuktian mana yang dipakai pada "tidak ada bilangan bulat terbesar"?
2. Apa kontraposisi dari "Jika x > 4, maka x² > 16"?

*Kunci: (1) Kontradiksi. (2) Jika x² ≤ 16, maka x ≤ 4.*

---

*Bab ini disusun ulang dari Modul Perkuliahan Pertemuan 7 "Metode Pembuktian", mata kuliah Logika Matematika (MI041), Fakultas Teknologi Informasi, Universitas Budi Luhur.*
