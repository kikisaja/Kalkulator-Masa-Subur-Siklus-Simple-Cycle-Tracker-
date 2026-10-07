# 🌸 Cycle & Fertility Tracker

Aplikasi kalkulator masa subur dan perkiraan siklus haid (*Simple Cycle Tracker*) interaktif berbasis JavaScript untuk membantu memprediksi tanggal haid berikutnya, estimasi puncak ovulasi, dan rentang masa subur.

---

## 🎯 Konsep Pembelajaran RPL / Pemrograman Web

1. **Manipulasi Objek Tanggal (`Date Object`):**
   Memanfaatkan metode `setDate()` dan `getDate()` JavaScript untuk kalkulasi penambahan/pengurangan tanggal berbasis hari.
2. **Standardisasi Format Tanggal (`Intl` / `toLocaleDateString`):**
   Menerapkan standar penulisan tanggal dalam Bahasa Indonesia (`id-ID`) agar ramah pengguna (*user-friendly*).
3. **Validasi Input Date:**
   Membaca format bawaan HTML5 `<input type="date">` yang menghasilkan format standar ISO `YYYY-MM-DD`.

---

## 📂 Struktur Folder Proyek

```text
├── index.html       # Form input tanggal haid terakhir, panjang siklus, dan kartu hasil
├── style.css        # Desain Neobrutalism, warna pop cerah, dan layout fleksibel
└── script.js        # Logika aritmatika tanggal (ovulasi, masa subur) & manipulasi DOM
