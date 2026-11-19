---
judul: Implikasi, Biimplikasi, dan Tautologi
ringkas: "Dua penghubung terakhir (jika ... maka ... dan jika dan hanya jika), menggabungkan banyak penghubung, serta tautologi, kontradiksi, kontingensi, konvers, invers, dan kontraposisi."
diperbarui: 2026-11-19
---

Bab ini menyelesaikan lima penghubung kalimat, lalu naik tingkat: menggabungkan beberapa penghubung dalam satu kalimat, dan menggolongkan hasilnya menjadi **tautologi**, **kontradiksi**, atau **kontingensi**.

> **Setelah membaca bab ini, kamu bisa:** membuat tabel kebenaran implikasi dan biimplikasi, menuliskan kalimat dengan banyak penghubung ke dalam simbol, membedakan tautologi, kontradiksi, dan kontingensi, serta membedakan konvers, invers, dan kontraposisi.

## Lima penghubung (pengingat)

1. Negasi
2. Konjungsi
3. Disjungsi
4. **Implikasi**
5. **Biimplikasi**

## Implikasi (jika ..., maka ...)

- Penghubung dengan kata **"jika ..., maka ..."**.
- Simbol: **⇒**
- Jika p dan q adalah dua proposisi, maka **p ⇒ q bernilai salah hanya jika p benar dan q salah**.
- Pada implikasi, p disebut **antecedent** (hipotesis/premis) dan q disebut **consequence** (kesimpulan/konklusi).

**Contoh:** *Jika besok cerah, maka aku akan datang ke rumahmu.*

| p | q | p ⇒ q |
|---|---|---|
| T | T | T |
| T | F | F |
| F | T | T |
| F | F | T |

Bayangkan itu sebuah janji. Kapan janjinya **dilanggar**?

| p (besok cerah) | q (aku datang) | Hasil | Penjelasan |
|---|---|---|---|
| Benar | Benar | T | Cuaca cerah (hipotesis benar), aku datang (konklusi benar). Janji ditepati |
| Benar | Salah | F | Cuaca cerah (hipotesis benar), aku tidak datang (konklusi salah). Janji dilanggar |
| Salah | Benar | T | Cuaca hujan, badai, banjir (hipotesis salah), aku tetap datang (konklusi benar). Janji tidak dilanggar, malah penuh pengorbanan |
| Salah | Salah | T | Cuaca tidak cerah (hipotesis salah), aku tidak datang (konklusi salah). Janji tidak dilanggar |

Perhatikan: kalau syaratnya tidak terpenuhi (besok tidak cerah), janji tidak bisa dibilang dilanggar, jadi hasilnya **benar**.

**Ternyata, p ⇒ q ≡ ¬p ∨ q**

| ¬p | q | ¬p ∨ q |
|---|---|---|
| F | T | T |
| F | F | F |
| T | T | T |
| T | F | T |

Urutan barisnya mengikuti p dan q pada tabel implikasi (TT, TF, FT, FF), dan hasilnya sama persis dengan p ⇒ q.

**Contoh di Python**

```python
p = True
q = False

hasil = (not p) or q

print(hasil)
```

Output: **False**, karena:
- ¬p = False
- q = False
- False or False = False

## Biimplikasi (jika dan hanya jika)

- Disebut juga **bikondisional**.
- Penghubung dengan kata **"jika ..., dan hanya jika ..."**.
- Simbol: **⇔**
- Jika kedua proposisi mempunyai **nilai kebenaran yang sama**, pernyataan itu bernilai benar.

**Contoh:** *Aku ingin makan, jika dan hanya jika kamu ingin makan.*

| p | q | p ⇔ q |
|---|---|---|
| T | T | T |
| T | F | F |
| F | T | F |
| F | F | T |

| p (aku ingin makan) | q (kamu ingin makan) | Hasil | Penjelasan |
|---|---|---|---|
| Benar | Benar | T | Aku ingin makan, kamu ingin makan. Cocok |
| Benar | Salah | F | Aku ingin makan, kamu tidak ingin makan. Tidak cocok |
| Salah | Benar | F | Aku tidak ingin makan (hipotesis salah), kamu ingin makan (konklusi benar). Tidak cocok |
| Salah | Salah | T | Aku tidak ingin makan (hipotesis salah), kamu tidak ingin makan (konklusi salah). Sama-sama tidak, jadi cocok |

Perhatikan bahwa **p ⇔ q ekuivalen secara logika dengan (p ⇒ q) ∧ (q ⇒ p)**.

**p ⇔ q ≡ (p ⇒ q) ∧ (q ⇒ p)**

| p | q | p ⇔ q | p ⇒ q | q ⇒ p | (p ⇒ q) ∧ (q ⇒ p) |
|---|---|---|---|---|---|
| T | T | T | T | T | T |
| T | F | F | F | T | F |
| F | T | F | T | F | F |
| F | F | T | T | T | T |

Dengan kata lain, "p jika dan hanya jika q" dibaca **"Jika p maka q, dan jika q maka p"**.

**Contoh di Java**

```java
public class Biimplikasi {
    public static void main(String[] args) {
        boolean p = true;
        boolean q = false;

        boolean hasil = ((!p) || q) && ((!q) || p);

        System.out.println("Hasil biimplikasi: " + hasil);
    }
}
```

Output: **Hasil biimplikasi: False**, karena:

```
p ⇔ q ≡ (p ⇒ q) ∧ (q ⇒ p)

(p ⇒ q) = ¬p ∨ q         (q ⇒ p) = ¬q ∨ p
(p ⇒ q) = F ∨ F          (q ⇒ p) = T ∨ T
(p ⇒ q) = F              (q ⇒ p) = T

(p ⇒ q) ∧ (q ⇒ p) = F ∧ T
(p ⇒ q) ∧ (q ⇒ p) = F
```

## Multi penghubung

**Multi penghubung** adalah pernyataan logika yang memakai **dua atau lebih** penghubung dalam satu pernyataan.

**Diketahui:**

```
P = Budi sedang bermain di kolam
Q = Budi ada di dalam rumah
R = Budi sedang mengerjakan PR
S = Budi sedang mendengarkan radio
```

Buatlah simbol dari kalimat berikut:

| Kalimat | Simbol |
|---|---|
| Budi sedang bermain di kolam atau ia ada di dalam rumah | P ∨ Q |
| Budi tidak bermain di kolam dan tidak sedang mengerjakan PR | ¬P ∧ ¬R |
| Budi sedang bermain di kolam dan tidak sedang mengerjakan PR | P ∧ ¬R |
| Budi ada di dalam rumah sedang mengerjakan PR sambil mendengarkan radio dan ia tidak bermain di kolam | (Q ∧ (R ∧ S)) ∧ ¬P |
| Budi sedang mendengarkan radio jika ia ada di dalam rumah | Q ⇒ S |
| Jika Budi ada di dalam rumah atau tidak mengerjakan PR, maka ia pasti sedang bermain di kolam sambil mendengarkan radio | (Q ∨ ¬R) ⇒ (P ∧ S) |

Kurung menunjukkan bagian mana yang dikerjakan lebih dulu.

## Tautologi, kontradiksi, dan kontingensi

Pernyataan majemuk digolongkan menurut kolom hasil akhirnya:

| Golongan | Ciri hasil akhir |
|---|---|
| **Tautologi** | Bernilai benar (T) untuk setiap kemungkinan. Harus dapat dibuktikan validitasnya |
| **Kontradiksi** | Kebalikan tautologi: bernilai salah (F) untuk setiap kemungkinan |
| **Kontingensi** | Bukan tautologi dan bukan kontradiksi (ada T dan ada F) |

**Contoh tautologi:** p ⇒ (q ⇒ p)

| p | q | q ⇒ p | p ⇒ (q ⇒ p) |
|---|---|---|---|
| T | T | T | T |
| T | F | T | T |
| F | T | F | T |
| F | F | T | T |

**Contoh kontradiksi:** q ∧ (¬p ⇔ (q ⇒ p))

| p | q | ¬p | q ⇒ p | ¬p ⇔ (q ⇒ p) | q ∧ (¬p ⇔ (q ⇒ p)) |
|---|---|---|---|---|---|
| T | T | F | T | F | F |
| T | F | F | T | F | F |
| F | T | T | F | F | F |
| F | F | T | T | T | F |

**Contoh kontingensi:** (p ∧ (p ⇒ q)) ∨ q

| p | q | p ⇒ q | p ∧ (p ⇒ q) | (p ∧ (p ⇒ q)) ∨ q |
|---|---|---|---|---|
| T | T | T | T | T |
| T | F | F | F | F |
| F | T | T | F | T |
| F | F | T | F | F |

## Konvers, invers, dan kontraposisi

Dari satu implikasi p ⇒ q, kita bisa membuat tiga bentuk lain.

| Bentuk | Simbol | Contoh |
|---|---|---|
| **Implikasi** | p ⇒ q | Jika Rizky rajin menabung, maka Rizky kaya |
| **Konvers** (kebalikan dari implikasi) | q ⇒ p | Jika Rizky kaya, maka Rizky rajin menabung |
| **Invers** (kedua bagiannya dinegasikan) | ¬p ⇒ ¬q | Jika Rizky tidak rajin menabung, maka Rizky tidak kaya |
| **Kontraposisi** (dibalik dan dinegasikan) | ¬q ⇒ ¬p | Jika Rizky tidak kaya, maka Rizky tidak rajin menabung |

| p | q | p ⇒ q | q ⇒ p | ¬p ⇒ ¬q | ¬q ⇒ ¬p |
|---|---|---|---|---|---|
| T | T | T | T | T | T |
| T | F | F | T | T | F |
| F | T | T | F | F | T |
| F | F | T | T | T | T |

Dari tabel itu terlihat:
- **Implikasi** sama nilainya dengan **kontraposisinya** (kolom p ⇒ q dan ¬q ⇒ ¬p sama).
- **Konvers** sama nilainya dengan **invers** (kolom q ⇒ p dan ¬p ⇒ ¬q sama).

## Rangkuman

- Implikasi selalu bernilai benar, **kecuali** antecedent = True bertemu dengan consequence = False.
- Biimplikasi terjadi jika dua implikasi saling dihubungkan dengan konjungsi: **p ⇔ q ≡ (p ⇒ q) ∧ (q ⇒ p)**.
- Tautologi, kontradiksi, dan kontingensi dibedakan berdasarkan ciri hasil akhir yang diperoleh.
- Implikasi bermakna sama dengan kontraposisinya, dan konvers bermakna sama dengan inversnya.

## Latihan singkat

1. Kapan p ⇒ q bernilai salah?
2. Jika p salah dan q salah, berapa nilai p ⇔ q?
3. Tuliskan kontraposisi dari "Jika hujan, maka jalanan basah".

*Kunci: (1) Hanya ketika p benar dan q salah. (2) Benar (T). (3) Jika jalanan tidak basah, maka tidak hujan.*

---

*Bab ini disusun ulang dari Modul Perkuliahan Pertemuan 3 "Penghubung Kalimat", mata kuliah Logika Matematika (MI041), Fakultas Teknologi Informasi, Universitas Budi Luhur. Penjelasan dan tabel disederhanakan untuk pembaca awam.*
