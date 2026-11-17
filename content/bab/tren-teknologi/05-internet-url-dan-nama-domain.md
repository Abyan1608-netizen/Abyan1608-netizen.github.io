---
judul: Internet, URL, dan Nama Domain
ringkas: "Membaca alamat web: http, www, domain, ccTLD dan gTLD, plus cara menilai alamat yang benar dan yang keliru."
diperbarui: 2026-11-17
---

Setiap halaman web punya alamat. Alamat itu punya aturan penulisan, dan kamu bisa mengenali bagian-bagiannya.

> **Setelah membaca bab ini, kamu bisa:** membaca bagian-bagian URL, membedakan ccTLD dan gTLD, dan menilai apakah sebuah alamat web benar.

## Bagian-bagian URL

Contoh: `https://www.news.com.my`

| Bagian | Arti |
|---|---|
| `http://` | ***HyperText Transfer Protocol***, aturan pengiriman halaman web. Versi aman: `https://` |
| `www` | ***World Wide Web***, penanda bahwa ini layanan web (kini sering opsional) |
| `news` | Nama situs |
| `.com` | Jenis organisasi (TLD) |
| `.my` | Kode negara (Malaysia) |

## Hierarki domain

Domain dibaca **dari kanan ke kiri**:
1. **TLD (Top Level Domain)**: bagian paling kanan, misalnya `.com`, `.id`.
2. **Second Level Domain**: misalnya `yahoo` pada `yahoo.com`, atau `co` pada `co.id`.
3. **Subdomain**: bagian di kiri, misalnya `mail` pada `mail.yahoo.com`.

## ccTLD dan gTLD

**TLD** adalah akhiran paling kanan dari nama domain. Ada dua kelompok utama:

**ccTLD (*country code Top Level Domain*)** adalah domain tingkat atas berdasarkan **negara**, terdiri atas **dua huruf**.

| ccTLD | Negara |
|---|---|
| .id | Indonesia |
| .my | Malaysia |
| .sg | Singapura |
| .jp | Jepang |
| .uk | Inggris |
| .tv | Tuvalu (populer untuk situs televisi atau video) |
| .co | Kolombia (sering dipakai sebagai singkatan *company*) |
| .to | Tonga |

**gTLD (*generic Top Level Domain*)** adalah domain tingkat atas **umum**, tidak terikat negara.

| gTLD | Biasa dipakai untuk |
|---|---|
| .com | Komersial (bisnis) |
| .org | Organisasi |
| .net | Jaringan, penyedia layanan internet |
| .edu | Pendidikan (di AS) |
| .gov | Pemerintahan (di AS) |
| .biz | Bisnis |
| .info | Informasi |

Banyak negara memakai **ccTLD bertingkat** (*second level*) yang menunjukkan jenis lembaga, contohnya di Indonesia:

| Domain | Untuk |
|---|---|
| **.co.id** | Perusahaan (*commercial*) |
| .ac.id | Akademik (perguruan tinggi) |
| .go.id | Pemerintah |
| .or.id | Organisasi |
| .sch.id | Sekolah |
| .web.id | Pribadi atau web umum |

## Menjawab bagian-bagian soal

- **http://** = protokol HTTP, aturan pengiriman halaman web.
- **www** = World Wide Web.
- **co.id** = domain perusahaan di Indonesia (*commercial*, negara *Indonesia*).
- **.tv** = ccTLD milik Tuvalu, dipakai untuk situs bertema televisi dan video.
- **.idn** = **bukan** ccTLD resmi. Kode negara Indonesia adalah **.id**. "IDN" adalah singkatan *Internationalized Domain Name*, yaitu nama domain yang memakai karakter non-Latin (misalnya aksara Arab atau Cina).
- **.co** = ccTLD Kolombia, populer sebagai singkatan *company*.
- **.to** = ccTLD Tonga.

## Menilai alamat yang diberikan

| Alamat | Penilaian |
|---|---|
| `www.http://yahoo.com` | **Salah.** Urutannya terbalik. `http://` selalu di depan: `http://www.yahoo.com` |
| `http://mail~yahoo.com` | **Salah.** Tanda `~` tidak boleh menggantikan titik. Yang benar `http://mail.yahoo.com` |
| `www.mail.yahoo.com` | **Benar.** `mail` adalah subdomain dari yahoo.com, tanpa protokol pun masih bisa dibuka browser |
| `http://id.yahoo.com` | **Benar.** `id` adalah subdomain Yahoo versi Indonesia |

## Menafsirkan alamat berita

| Alamat | Arti |
|---|---|
| `www.news.tv` | Situs "news" dengan domain Tuvalu (.tv), biasanya situs televisi atau video berita |
| `www.news.com.sg` | Situs "news" **komersial** dari **Singapura** |
| `www.news.com.my` | Situs "news" **komersial** dari **Malaysia** |
| `www.news.biz` | Situs "news" dengan gTLD **.biz** (bisnis), tidak terikat negara |

## Latihan singkat

1. Apa beda ccTLD dan gTLD? Beri satu contoh masing-masing.
2. Apa arti `co.id`?
3. Mengapa `http://mail~yahoo.com` salah?

*Kunci: (1) ccTLD berdasarkan negara, contoh .id. gTLD umum, contoh .com. (2) Domain perusahaan di Indonesia. (3) Pemisah domain harus titik, bukan tilde.*
