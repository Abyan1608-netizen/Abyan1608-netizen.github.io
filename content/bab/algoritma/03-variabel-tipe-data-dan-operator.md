---
judul: Variabel, Tipe Data, dan Operator
ringkas: "Bahan dasar semua program: tempat menyimpan nilai, jenis nilai, dan simbol untuk menghitung, membandingkan, dan menggabungkan kondisi."
diperbarui: 2026-11-04
---

Kita sudah bisa menuliskan langkah dan menggambar alurnya. Sekarang saatnya mengenal **bahan-bahan dasar** yang dipakai setiap program, apa pun bahasanya: **variabel, tipe data, konstanta, dan operator**. Contoh kodenya memakai Python, tetapi konsepnya berlaku di hampir semua bahasa.

> **Setelah membaca bab ini, kamu bisa:** menjelaskan apa itu bahasa pemrograman tingkat tinggi, memberi nama variabel dengan benar, memilih tipe data yang tepat, dan memakai operator aritmatika, perbandingan, dan logika.

## Bahasa pemrograman

Ingat dari bab 1: **program** adalah algoritma yang ditulis dalam bahasa yang bisa dipahami komputer. Masalahnya, komputer sebenarnya hanya mengerti **bahasa mesin**, yaitu deretan angka 0 dan 1. Pseudocode tidak bisa langsung dijalankan.

Karena itu ada bahasa pemrograman sebagai jembatan, dan bahasa-bahasa itu bertingkat:

| Tingkat | Ciri | Contoh |
| --- | --- | --- |
| Bahasa mesin | Kode biner (0 dan 1), langsung dimengerti komputer | (tidak ditulis manusia secara langsung) |
| Tingkat rendah | Instruksi dekat dengan perangkat keras | Assembly |
| Tingkat menengah | Campuran kata manusia dan simbol, masih dekat dengan perangkat keras | C |
| Tingkat tinggi | Memakai kata-kata yang mirip bahasa manusia, lebih mudah dibaca dan ditulis | Python, Java, JavaScript, PHP |

Bahasa tingkat tinggi diterjemahkan ke bahasa mesin oleh **compiler** (menerjemahkan seluruh program sekaligus) atau **interpreter** (menerjemahkan baris demi baris). Python memakai interpreter.

Satu algoritma bisa ditulis dalam banyak bahasa. Algoritma "simpan 5 dan 2, jumlahkan, tampilkan hasilnya" ditulis begini dalam Python:

```python
a = 5
b = 2
t = a + b
print(t)
```

dan begini dalam bahasa C:

```c
#include <stdio.h>

int main() {
    int a = 5;
    int b = 2;
    int t = a + b;
    printf("%d\n", t);
    return 0;
}
```

Hasilnya sama-sama **7**. Lihat bahwa Python lebih ringkas. Itu salah satu alasan Python cocok untuk pemula.

## Variabel

**Variabel** adalah **kotak bernama** di dalam memori komputer untuk menyimpan sebuah nilai, dan isinya boleh diganti-ganti. Kamu menyebut namanya, dan komputer yang mencarikan lokasinya.

```python
umur = 17
umur = 18      # isinya boleh diganti
```

### Aturan memberi nama

Nama variabel kamu karang sendiri, dengan aturan umum seperti ini (aturan rincinya sedikit berbeda antarbahasa):

1. Tidak boleh sama dengan **kata khusus** milik bahasa itu (disebut *keyword*), misalnya `if`, `for`, `class`.
2. Karakter pertama harus **huruf atau garis bawah** (`_`). Karakter berikutnya boleh huruf, angka, atau garis bawah.
3. Tidak boleh mengandung **spasi** atau tanda seperti `-` dan `/`.
4. Huruf besar dan kecil dianggap **berbeda** (*case sensitive*): `nilai` dan `Nilai` adalah dua variabel yang berbeda.

| Nama yang benar | Nama yang salah | Kenapa salah |
| --- | --- | --- |
| `a` | `1a` | diawali angka |
| `a1` | `nilai-1` | memakai tanda minus |
| `nilai` | `harga satuan` | memakai spasi |
| `Nilai` | `benar/salah` | memakai garis miring |
| `harga_satuan` | `class` | kata khusus Python |
| `hargaSatuan` | `for` | kata khusus Python |
| `_harga` | | |

Pilih nama yang menjelaskan isinya. Untuk menyimpan luas segitiga, `luas` jauh lebih jelas daripada `x`.

## Konstanta

**Konstanta** adalah nilai yang **tetap** selama program berjalan, contohnya `PI = 3.14`. Python tidak benar-benar melarang nilainya diubah, jadi pemrogram sepakat menulis nama konstanta dengan **HURUF BESAR** sebagai tanda "jangan diubah".

## Tipe data

Nilai punya jenis. Angka 127 berbeda sifatnya dengan kata "Jakarta", dan komputer perlu tahu jenisnya untuk memperlakukannya dengan benar. Empat jenis dasar:

| Tipe | Isinya | Contoh | Nama di Python |
| --- | --- | --- | --- |
| Bilangan bulat | Angka tanpa pecahan | `127`, `3000` | `int` |
| Bilangan pecahan | Angka dengan desimal | `9.5`, `30.5` | `float` |
| Teks | Satu atau banyak karakter, diapit tanda kutip | `"Jakarta"`, `'A'` | `str` |
| Boolean | Hanya benar atau salah | `True`, `False` | `bool` |

Perhatikan: di Python, desimal ditulis dengan **titik** (`9.5`), bukan koma. Nilai `True` dan `False` juga bisa dianggap sebagai 1 dan 0.

Beberapa pertimbangan saat memilih tipe data: sesuaikan dengan kebutuhan datamu, dan di bahasa seperti C, perhatikan juga ukuran dan jangkauannya karena tipe yang lebih besar memakan lebih banyak memori.

```python
nama = "Raihan"       # str
umur = 20             # int
tinggi = 170.5        # float
sudah_makan = True    # bool
```

## Operator

**Operator** adalah simbol yang memerintahkan komputer melakukan sesuatu pada nilai.

### 1. Operator penugasan

Simbolnya `=`, artinya **simpan ke**. Nilai di kanan disimpan ke variabel di kiri.

```python
harga = 3000
nilai_akhir = tugas + uts + uas
```

### 2. Operator aritmatika

| Simbol | Fungsi | Contoh | Hasil |
| --- | --- | --- | --- |
| `+` | Tambah | `7 + 2` | 9 |
| `-` | Kurang | `7 - 2` | 5 |
| `*` | Kali | `7 * 2` | 14 |
| `/` | Bagi (hasil pecahan) | `7 / 2` | 3.5 |
| `//` | Bagi bulat | `7 // 2` | 3 |
| `%` | Sisa bagi | `7 % 2` | 1 |

**Urutan pengerjaan** sama seperti di matematika: `*`, `/`, `//`, dan `%` dikerjakan **lebih dulu**, baru `+` dan `-`. Tanda kurung `( )` dikerjakan paling awal.

```python
print(2 + 3 * 4)      # 14, karena 3 * 4 dulu
print((2 + 3) * 4)    # 20, karena kurung dulu
```

### 3. Operator perbandingan

Hasilnya selalu **benar atau salah** (boolean).

| Simbol | Artinya | Contoh | Hasil |
| --- | --- | --- | --- |
| `<` | kurang dari | `3 < 5` | `True` |
| `<=` | kurang dari atau sama dengan | `5 <= 5` | `True` |
| `>` | lebih dari | `3 > 5` | `False` |
| `>=` | lebih dari atau sama dengan | `3 >= 5` | `False` |
| `==` | sama dengan | `4 == 4` | `True` |
| `!=` | tidak sama dengan | `4 != 4` | `False` |

> **Jebakan klasik pemula:** `=` itu **menyimpan**, sedangkan `==` itu **membandingkan**. Menukar keduanya adalah salah satu kesalahan yang paling sering terjadi.

### 4. Operator logika

Dipakai untuk **menggabungkan** beberapa kondisi. Di Python ditulis `and`, `or`, dan `not`.

**AND (dan):** hasilnya benar hanya kalau **kedua** kondisi benar.

| A | B | A and B |
| --- | --- | --- |
| True | True | **True** |
| True | False | False |
| False | True | False |
| False | False | False |

**OR (atau):** hasilnya benar kalau **salah satu atau keduanya** benar.

| A | B | A or B |
| --- | --- | --- |
| True | True | True |
| True | False | **True** |
| False | True | **True** |
| False | False | False |

**NOT (ingkaran):** membalik nilai. `not True` menjadi `False`, dan `not False` menjadi `True`.

Contoh nyata: boleh membuat KTP kalau umur minimal 17 **dan** sudah berstatus warga.

```python
umur = 18
warga = True
boleh = umur >= 17 and warga
print(boleh)      # True
```

### Operator lain, sekilas

Ada juga operator **bitwise** (bekerja pada bit) dan **unary** (bekerja pada satu nilai, misalnya tanda minus `-x`). Untuk sekarang kamu belum membutuhkannya, jadi kita bahas nanti saat waktunya. Satu catatan untuk pengguna bahasa lain: `A++` yang ada di C dan Java **tidak ada** di Python. Di Python kamu menulis `A += 1` atau `A = A + 1`.

## Latihan

1. Buat **algoritma dan flowchart** untuk memasukkan tiga bilangan bulat yang berbeda, lalu menampilkan yang **terbesar**. **Tanpa** operator logika.
2. Soal yang sama, tetapi **boleh** memakai operator logika.
3. Apa yang tampil dari program ini?

```python
a = 10
b = 4
print(a // b, a % b, a / b)
```

4. Apa yang tampil dari program ini?

```python
x = 5
y = 2
print(x + y * 3)
print((x + y) * 3)
```

5. Tentukan hasil tiap baris:

```python
print(5 > 3 and 2 > 4)
print(5 > 3 or 2 > 4)
print(not 5 > 3)
```

### Contoh jawaban

**Soal 1, tanpa operator logika** (keputusan bertingkat):

```
Baca A, B, C
Jika A > B:
    Jika A > C: tampilkan A
    Jika tidak: tampilkan C
Jika tidak:
    Jika B > C: tampilkan B
    Jika tidak: tampilkan C
```

**Soal 2, dengan operator logika:**

```
Baca A, B, C
Jika A > B dan A > C: tampilkan A
Jika tidak, jika B > A dan B > C: tampilkan B
Jika tidak: tampilkan C
```

Bandingkan keduanya: versi dengan operator logika lebih datar dan lebih mudah dibaca.

**Soal 3:** `10 // 4 = 2`, `10 % 4 = 2`, `10 / 4 = 2.5`. Yang tampil: **2 2 2.5**.

**Soal 4:** `5 + 2 * 3 = 11`, lalu `(5 + 2) * 3 = 21`. Yang tampil: **11** lalu **21**.

**Soal 5:** `5 > 3` benar dan `2 > 4` salah. Jadi `and` menghasilkan **False**, `or` menghasilkan **True**, dan `not 5 > 3` menghasilkan **False**.

## Rangkuman

- Komputer hanya mengerti bahasa mesin; **bahasa pemrograman** menjadi jembatannya, dan Python termasuk bahasa tingkat tinggi.
- **Variabel** adalah kotak bernama untuk menyimpan nilai; nama harus mengikuti aturan, dan huruf besar-kecil dianggap berbeda.
- **Konstanta** adalah nilai tetap, biasanya ditulis dengan huruf besar.
- Empat tipe data dasar: **int, float, str, bool**.
- Operator: **penugasan** (`=`), **aritmatika**, **perbandingan** (hasilnya benar/salah), dan **logika** (`and`, `or`, `not`).
- Bedakan **`=`** (menyimpan) dari **`==`** (membandingkan).

---

*Bab ini disusun ulang dari Modul Perkuliahan #3 "Dasar Pemrograman", mata kuliah Analisis dan Desain Algoritma (PG167), Fakultas Teknologi Informasi, Universitas Budi Luhur (2019). Contoh dalam Python, tabel kebenaran, dan latihan ditambahkan untuk pembaca pemula.*
