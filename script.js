// --- 1. AMBIL ELEMEN DOM ---
const cycleForm = document.getElementById("cycle-form");
const lastPeriodInput = document.getElementById("last-period");
const cycleLengthInput = document.getElementById("cycle-length");
const resultCard = document.getElementById("result-card");

const nextPeriodDateEl = document.getElementById("next-period-date");
const fertileWindowDatesEl = document.getElementById("fertile-window-dates");
const ovulationDateEl = document.getElementById("ovulation-date");

// --- 2. SET DEFAULT TANGGAL HARI INI KE INPUT ---
const today = new Date();
const formattedToday = today.toISOString().split("T")[0];
lastPeriodInput.value = formattedToday;

// --- 3. FUNGSI FORMAT TANGGAL INDONESIA ---
function formatDateIndonesian(date) {
    const options = { day: "numeric", month: "long", year: "numeric" };
    return date.toLocaleDateString("id-ID", options);
}

// --- 4. LOGIKA KALKULASI SIKLUS ---
cycleForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const lastPeriodVal = lastPeriodInput.value;
    const cycleLength = parseInt(cycleLengthInput.value);

    if (!lastPeriodVal || isNaN(cycleLength)) {
        alert("Harap isi semua tanggal dan angka dengan benar!");
        return;
    }

    // Konversi string ke objek Date
    const lastPeriodDate = new Date(lastPeriodVal);

    // 1. Hitung Tanggal Haid Berikutnya = Tanggal Terakhir + Panjang Siklus
    const nextPeriodDate = new Date(lastPeriodDate);
    nextPeriodDate.setDate(nextPeriodDate.getDate() + cycleLength);

    // 2. Hitung Puncak Ovulasi = Tanggal Haid Berikutnya - 14 Hari
    const ovulationDate = new Date(nextPeriodDate);
    ovulationDate.setDate(ovulationDate.getDate() - 14);

    // 3. Hitung Masa Subur (Fertile Window) = Ovulasi - 4 Hari s/d Ovulasi + 1 Hari
    const fertileStart = new Date(ovulationDate);
    fertileStart.setDate(fertileStart.getDate() - 4);

    const fertileEnd = new Date(ovulationDate);
    fertileEnd.setDate(fertileEnd.getDate() + 1);

    // --- RENDER KE UI ---
    nextPeriodDateEl.textContent = formatDateIndonesian(nextPeriodDate);
    ovulationDateEl.textContent = formatDateIndonesian(ovulationDate);
    fertileWindowDatesEl.textContent = `${formatDateIndonesian(fertileStart)} - ${formatDateIndonesian(fertileEnd)}`;

    // Tampilkan Card Hasil
    resultCard.classList.remove("hidden");
});
