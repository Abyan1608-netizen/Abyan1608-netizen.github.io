---
judul: Hukum-Hukum Logika
ringkas: "Ekuivalensi logika, cara mengubah dan menegasikan pernyataan, daftar hukum logika, dan contoh pembuktian langkah demi langkah."
diperbarui: 2026-11-19
---

Dua pernyataan yang tampak berbeda bisa ternyata bermakna sama. Bab ini mengajarkan cara membuktikan hal itu, dan hukum-hukum yang membantu menyederhanakan pernyataan logika.

> **Setelah membaca bab ini, kamu bisa:** menjelaskan arti ekuivalensi, menegasikan implikasi dan biimplikasi, serta memakai hukum-hukum logika untuk membuktikan dua pernyataan ekuivalen.

## Ekuivalensi logika

Dua pernyataan disebut **ekuivalen** (simbol **≡**) jika **nilai kebenarannya selalu sama** pada setiap kemungkinan. Cara memeriksanya: buat tabel kebenaran, lalu lihat apakah kolom hasilnya sama persis.

Contoh, kita sudah melihat di bab sebelumnya bahwa **p ⇒ q ≡ ¬p ∨ q**.

## Transformasi implikasi

**A ⇒ B ≡ ¬A ∨ B**

| A | B | A ⇒ B | ¬A ∨ B |
|---|---|---|---|
| T | T | T | T |
| T | F | F | F |
| F | T | T | T |
| F | F | T | T |

Kolom A ⇒ B dan ¬A ∨ B sama, jadi keduanya ekuivalen.

## Negasi (ingkaran) pernyataan majemuk

### Negasi disjungsi

**¬(A ∨ B) ≡ ¬A ∧ ¬B**

| A | B | ¬(A ∨ B) | ¬A ∧ ¬B |
|---|---|---|---|
| T | T | F | F |
| T | F | F | F |
| F | T | F | F |
| F | F | T | T |

### Negasi konjungsi

**¬(A ∧ B) ≡ ¬A ∨ ¬B**

| A | B | ¬(A ∧ B) | ¬A ∨ ¬B |
|---|---|---|---|
| T | T | F | F |
| T | F | T | T |
| F | T | T | T |
| F | F | T | T |

### Negasi implikasi

**¬(A ⇒ B) ≡ A ∧ ¬B**

Langkah-langkahnya:

```
A ⇒ B   ≡ ¬A ∨ B
¬(A ⇒ B) ≡ ¬(¬A ∨ B)
         ≡ A ∧ ¬B
```

| A | B | ¬(A ⇒ B) | A ∧ ¬B |
|---|---|---|---|
| T | T | F | F |
| T | F | T | T |
| F | T | F | F |
| F | F | F | F |

### Negasi biimplikasi

**¬(A ⇔ B) ≡ (A ∧ ¬B) ∨ (B ∧ ¬A)**

Langkah-langkahnya:

```
¬(A ⇔ B)
≡ ¬((A ⇒ B) ∧ (B ⇒ A))
≡ ¬((¬A ∨ B) ∧ (¬B ∨ A))
≡ (A ∧ ¬B) ∨ (B ∧ ¬A)
```

| A | B | ¬(A ⇔ B) | (A ∧ ¬B) ∨ (B ∧ ¬A) |
|---|---|---|---|
| T | T | F | F |
| T | F | T | T |
| F | T | T | T |
| F | F | F | F |

## Hukum-hukum logika

Hukum berikut berlaku untuk pernyataan P, Q, dan R mana pun. T berarti selalu benar, F berarti selalu salah.

### 1. Hukum identitas

**P ∨ F ≡ P** dan **P ∧ T ≡ P**

| P | P ∨ F | P ∧ T |
|---|---|---|
| T | T | T |
| F | F | F |

### 2. Hukum dominasi

**P ∧ F ≡ F** dan **P ∨ T ≡ T**

| P | P ∧ F | P ∨ T |
|---|---|---|
| T | F | T |
| F | F | T |

### 3. Hukum negasi

**P ∧ ¬P ≡ F** dan **P ∨ ¬P ≡ T**

| P | ¬P | P ∧ ¬P | P ∨ ¬P |
|---|---|---|---|
| T | F | F | T |
| F | T | F | T |

### 4. Hukum idempoten

**P ∧ P ≡ P** dan **P ∨ P ≡ P**

| P | P ∧ P | P ∨ P |
|---|---|---|
| T | T | T |
| F | F | F |

### 5. Hukum involusi (negasi ganda)

**¬(¬P) ≡ P**

| P | ¬P | ¬(¬P) |
|---|---|---|
| T | F | T |
| F | T | F |

### 6. Hukum absorpsi

**P ∨ (P ∧ Q) ≡ P** dan **P ∧ (P ∨ Q) ≡ P**

| P | Q | P ∨ (P ∧ Q) | P ∧ (P ∨ Q) |
|---|---|---|---|
| T | T | T | T |
| T | F | T | T |
| F | T | F | F |
| F | F | F | F |

### 7. Hukum komutatif

**P ∨ Q ≡ Q ∨ P** dan **P ∧ Q ≡ Q ∧ P**

| P | Q | P ∨ Q | Q ∨ P | P ∧ Q | Q ∧ P |
|---|---|---|---|---|---|
| T | T | T | T | T | T |
| T | F | T | T | F | F |
| F | T | T | T | F | F |
| F | F | F | F | F | F |

### 8. Hukum asosiatif

**P ∨ (Q ∨ R) ≡ (P ∨ Q) ∨ R** dan **P ∧ (Q ∧ R) ≡ (P ∧ Q) ∧ R**

| P | Q | R | P ∨ (Q ∨ R) | (P ∨ Q) ∨ R | P ∧ (Q ∧ R) | (P ∧ Q) ∧ R |
|---|---|---|---|---|---|---|
| T | T | T | T | T | T | T |
| T | T | F | T | T | F | F |
| T | F | T | T | T | F | F |
| T | F | F | T | T | F | F |
| F | T | T | T | T | F | F |
| F | T | F | T | T | F | F |
| F | F | T | T | T | F | F |
| F | F | F | F | F | F | F |

### 9. Hukum distributif

**P ∧ (Q ∨ R) ≡ (P ∧ Q) ∨ (P ∧ R)** dan **P ∨ (Q ∧ R) ≡ (P ∨ Q) ∧ (P ∨ R)**

| P | Q | R | P ∧ (Q ∨ R) | (P ∧ Q) ∨ (P ∧ R) | P ∨ (Q ∧ R) | (P ∨ Q) ∧ (P ∨ R) |
|---|---|---|---|---|---|---|
| T | T | T | T | T | T | T |
| T | T | F | T | T | T | T |
| T | F | T | T | T | T | T |
| T | F | F | F | F | T | T |
| F | T | T | F | F | T | T |
| F | T | F | F | F | F | F |
| F | F | T | F | F | F | F |
| F | F | F | F | F | F | F |

### 10. Hukum De Morgan

**¬(P ∧ Q) ≡ ¬P ∨ ¬Q** dan **¬(P ∨ Q) ≡ ¬P ∧ ¬Q**

| P | Q | ¬(P ∧ Q) | ¬P ∨ ¬Q | ¬(P ∨ Q) | ¬P ∧ ¬Q |
|---|---|---|---|---|---|
| T | T | F | F | F | F |
| T | F | T | T | F | F |
| F | T | T | T | F | F |
| F | F | T | T | T | T |

## Contoh pembuktian dengan hukum logika

Buktikan bahwa **(p ∧ q) ∨ (p ∧ ¬q) ≡ p**.

```
(p ∧ q) ∨ (p ∧ ¬q) ≡ p

Hukum Distributif
p ∧ (q ∨ ¬q) ≡ p

Hukum Negasi
p ∧ T ≡ p

Hukum Identitas
p ≡ p
```

Ruas kiri dan ruas kanan akhirnya sama, jadi terbukti.

## Rangkuman

- Dua pernyataan **ekuivalen (≡)** bila kolom hasil tabel kebenarannya sama persis.
- **A ⇒ B ≡ ¬A ∨ B**.
- **¬(A ∨ B) ≡ ¬A ∧ ¬B**, **¬(A ∧ B) ≡ ¬A ∨ ¬B**, **¬(A ⇒ B) ≡ A ∧ ¬B**, dan **¬(A ⇔ B) ≡ (A ∧ ¬B) ∨ (B ∧ ¬A)**.
- Hukum logika (identitas, dominasi, negasi, idempoten, involusi, absorpsi, komutatif, asosiatif, distributif, De Morgan) dipakai untuk menyederhanakan dan membuktikan pernyataan langkah demi langkah.

## Latihan singkat

1. Tuliskan negasi dari "A atau B" memakai De Morgan.
2. Sederhanakan P ∨ (P ∧ Q).
3. Tuliskan negasi dari p ⇒ q.

*Kunci: (1) ¬A ∧ ¬B. (2) P (hukum absorpsi). (3) p ∧ ¬q.*

---

*Bab ini disusun ulang dari Modul Perkuliahan Pertemuan 4 "Hukum Logika", mata kuliah Logika Matematika (MI041), Fakultas Teknologi Informasi, Universitas Budi Luhur. Semua tabel kebenaran telah diperiksa ulang.*
