---
judul: "Tabel Kebenaran: Negasi, Konjungsi, dan Disjungsi"
ringkas: "Cara membuat tabel kebenaran, lalu mengenal tiga penghubung pertama: tidak (¬), dan (∧), dan atau (∨), lengkap dengan contoh di Python dan Java."
diperbarui: 2026-11-19
---

Di bab ini kamu belajar membuat **tabel kebenaran** dan memakai tiga penghubung pertama: **negasi**, **konjungsi**, dan **disjungsi**. Ketiganya juga dipakai di program komputer, jadi di akhir tiap bagian ada contoh kodenya.

> **Setelah membaca bab ini, kamu bisa:** menentukan jumlah baris tabel kebenaran, membuat tabel untuk negasi, konjungsi, dan disjungsi, serta menuliskan kalimat sehari-hari ke dalam simbol logika.

## Tabel kebenaran

**Tabel kebenaran** menunjukkan **semua kemungkinan** nilai kebenaran suatu pernyataan logika beserta hasil operasinya.

Nilai kebenaran biasanya ditulis:
- **T** (True) atau **B** (Benar)
- **F** (False) atau **S** (Salah)

Jumlah baris tabel dihitung dengan rumus **2ⁿ**, dengan n adalah banyaknya variabel.

**Contoh.** Ada 2 variabel, yaitu p dan q. Buat tabel kebenarannya!

```
2ⁿ = 2²
2ⁿ = 4
```

| p | q |
|---|---|
| T | T |
| T | F |
| F | T |
| F | F |

Dengan 3 variabel, jumlah barisnya 2³ = 8.

## Lima penghubung

1. Negasi
2. Konjungsi
3. Disjungsi
4. Implikasi
5. Biimplikasi

Bab ini membahas yang pertama sampai ketiga. Implikasi dan biimplikasi ada di bab berikutnya.

## Negasi

**Negasi** adalah kalimat yang **berlawanan** dengan proposisi awalnya. Biasanya memakai kata *tidak*, *bukan*, atau *tidak benar*.

Simbol negasi dari p: **¬p**, bisa juga ditulis **~p** atau **p̅** (p dengan garis di atasnya).

| p | ¬p |
|---|---|
| T | F |
| F | T |

**Contoh.** Apa negasi dari proposisi berikut?

| Proposisi | Negasinya |
|---|---|
| Hari ini adalah hari Sabtu | Hari ini bukan hari Sabtu |
| Tidak ada musim hujan di Indonesia | Ada musim hujan di Indonesia |
| Rizky memakai kacamata | Rizky tidak memakai kacamata |
| Gunung Merapi terletak di 2 provinsi dan 3 kabupaten | Gunung Merapi bukan terletak di 2 provinsi dan 3 kabupaten |

**Contoh di Python**

```python
data_valid = True

if not data_valid:
    print("Data tidak valid")
```

Data valid adalah benar (`True`), maka `not data_valid` bernilai `False`. Dalam hal ini, tidak ada yang tercetak.

**Contoh di Java**

```java
if (!passwordBenar) {
    System.out.println("Password salah!");
}
```

`!passwordBenar` adalah negasi dari "password benar". Artinya, kode ini berlaku jika password dalam keadaan tidak benar. Kemudian tampil output: **Password salah!**

## Konjungsi (dan)

- Minimal terdiri dari **dua proposisi**.
- Dihubungkan oleh kata **"dan"**.
- Simbol: **∧**
- Hasilnya bernilai **benar hanya jika semua proposisinya benar**.

| p | q | p ∧ q |
|---|---|---|
| T | T | T |
| T | F | F |
| F | T | F |
| F | F | F |

**Contoh: menggabungkan 2 premis**

```
p = Fahmi makan nasi
q = Fahmi minum kopi
p ∧ q = Fahmi makan nasi dan minum kopi
```

**Nilai proposisi majemuk p ∧ q**

```
14 + 4 = 100   dan   31 adalah bilangan prima
   salah                  benar
              salah
```

**Contoh konjungsi bersama negasi**

```
p = Hari ini panas
q = Hari ini cerah
```

Nyatakan kalimat di bawah ini dengan simbol logika:

| Kalimat | Simbol |
|---|---|
| Hari ini tidak panas tetapi cerah | ¬p ∧ q (kata "tetapi" artinya sama dengan "dan") |
| Hari ini tidak panas dan tidak cerah | ¬p ∧ ¬q |
| Tidak benar bahwa hari ini panas dan cerah | ¬(p ∧ q) |

**Contoh di Python**

```python
nilai = 80
kehadiran = 90

if nilai >= 60 and kehadiran >= 80:
    print("Mahasiswa lulus")
else:
    print("Mahasiswa tidak lulus")
```

Syarat: nilai ≥ 60 dan kehadiran ≥ 80.

Output: **Mahasiswa lulus**, karena memenuhi syarat:
- nilai ≥ 60 → True
- kehadiran ≥ 80 → True
- True and True → True

**Contoh di Java**

```java
public class Kelulusan {
    public static void main(String[] args) {
        int nilai = 96;
        int kehadiran = 72;

        if (nilai >= 60 && kehadiran >= 80) {
            System.out.println("Mahasiswa lulus");
        } else {
            System.out.println("Mahasiswa tidak lulus");
        }
    }
}
```

Syarat: nilai ≥ 60 dan kehadiran ≥ 80.

Output: **Mahasiswa tidak lulus**, karena tidak memenuhi syarat:
- nilai ≥ 60 → True
- kehadiran ≥ 80 → False
- True and False → False

## Disjungsi (atau)

- Minimal terdiri dari **dua proposisi**.
- Dihubungkan oleh kata **"atau"**.
- Simbol: **∨**
- Hasilnya bernilai **salah hanya jika semua proposisinya salah**.

| p | q | p ∨ q |
|---|---|---|
| T | T | T |
| T | F | T |
| F | T | T |
| F | F | F |

**Contoh: menggabungkan 2 premis**

```
p = 5 adalah bilangan prima
q = 5 adalah bilangan ganjil
p ∨ q = 5 adalah bilangan prima atau ganjil
```

**Nilai proposisi majemuk p ∨ q**

```
2 + 1 = 5   atau   Bogor terletak di Jawa Timur
  salah                     salah
              salah
```

**Contoh disjungsi bersama negasi**

```
p = Login membutuhkan username
q = Login membutuhkan e-mail
```

Nyatakan kalimat di bawah ini dengan simbol logika:

| Kalimat | Simbol |
|---|---|
| Login membutuhkan username atau e-mail | p ∨ q |
| Login tidak membutuhkan username atau tidak membutuhkan e-mail | ¬p ∨ ¬q |
| Tidak benar bahwa login membutuhkan username atau e-mail | ¬(p ∨ q) |

**Contoh di Python**

```python
suhu = 35
ruangan_penuh = False

if suhu > 30 or ruangan_penuh:
    print("Kipas dinyalakan")
else:
    print("Kipas tetap mati")
```

Syarat: suhu > 30 atau ruangan_penuh bernilai true.

Output: **Kipas dinyalakan**, karena:
- Suhu > 30 → True
- Ruangan_penuh → False
- True or False → True

**Contoh di Java**

```java
public class PenyiramanTanaman {
    public static void main(String[] args) {
        boolean tanahKering = true;
        boolean suhuPanas = false;

        if (tanahKering || suhuPanas) {
            System.out.println("Pompa air menyala");
        } else {
            System.out.println("Pompa air mati");
        }
    }
}
```

Syarat: tanah kering true atau suhu panas true.

Output: **Pompa air menyala**, karena:
- Tanah kering → True
- Suhu panas → False
- True or False → True

## Contoh: negasi, konjungsi, dan disjungsi dalam satu tabel

Lengkapi tabel kebenaran dari pernyataan berikut: ¬p ∧ q, p ∧ ¬q, ¬p ∨ q, dan p ∨ ¬q.

| p | q | ¬p | ¬p ∧ q | ¬q | p ∧ ¬q | ¬p ∨ q | p ∨ ¬q |
|---|---|---|---|---|---|---|---|
| T | T | F | F | F | F | T | T |
| T | F | F | F | T | T | F | T |
| F | T | T | T | F | F | T | F |
| F | F | T | F | T | F | T | T |

## Rangkuman

- Jumlah baris tabel kebenaran adalah **2ⁿ**.
- **Negasi (¬)** membalik nilai: benar menjadi salah, salah menjadi benar.
- **Konjungsi (∧)** benar hanya jika semua bagiannya benar.
- **Disjungsi (∨)** salah hanya jika semua bagiannya salah.
- Konjungsi dan disjungsi adalah dasar dari kode kondisi dalam program komputer (`and`/`&&`, `or`/`||`, `not`/`!`).

## Latihan singkat

1. Berapa baris tabel kebenaran untuk 3 variabel?
2. Jika p benar dan q salah, berapa nilai p ∧ q? Dan p ∨ q?
3. Tulis dengan simbol: "Tidak benar bahwa hari ini hujan atau berangin", bila p = Hari ini hujan dan q = Hari ini berangin.

*Kunci: (1) 2³ = 8 baris. (2) p ∧ q = F, p ∨ q = T. (3) ¬(p ∨ q).*

---

*Bab ini disusun ulang dari Modul Perkuliahan Pertemuan 2 "Penghubung Kalimat", mata kuliah Logika Matematika (MI041), Fakultas Teknologi Informasi, Universitas Budi Luhur. Contoh kode Python dan Java mengikuti modul tersebut.*
