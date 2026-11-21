import { BOBOT } from "./nilai.js";

export const nilaiAkhir = ({ tugas, uts, uas }, bobot = BOBOT) =>
    Math.round((tugas * bobot.tugas + uts * bobot.uts + uas * bobot.uas) * 100) / 100;

export const hurufMutu = (angka) => {
    if (angka >= 85) return "A";
    if (angka >= 75) return "B";
    if (angka >= 65) return "C";
    if (angka >= 50) return "D";
    return "E";
}

export const lulus = (angka, batas = 65) => angka >= batas;

export const lengkapiNilai = (daftar) =>
    daftar.map((m) => {
        const akhir = nilaiAkhir(m);
        return {
            ...m, akhir, huruf: hurufMutu(akhir), status: lulus(akhir) ?
                "Lulus" : "Tidak lulus"
        };
    });

export const jumlah = (angka) => angka.reduce((total, n) => total + n, 0);

export const rataRata = (angka) =>
    angka.length === 0 ? 0 : Math.round((jumlah(angka) / angka.length) * 100) /
        100;

export const tertinggi = (angka) => Math.max(...angka);
export const terendah = (angka) => Math.min(...angka);
export const ambilKolom = (daftar, kolom) => daftar.map((m) => m[kolom]);
export const cariNim = (daftar, nim) => daftar.find((m) => m.nim === nim);
export const filterProdi = (daftar, prodi) => daftar.filter((m) => m.prodi
    === prodi);

export const urutkan = (daftar, kolom, arah = "turun") =>
    [...daftar].sort((a, b) => (arah === "naik" ? a[kolom] - b[kolom] :
        b[kolom] - a[kolom]));

export const peringkat = (daftar, n = 3) => urutkan(daftar, "akhir").slice(0,
    n);

export const distribusiHuruf = (daftar) =>
    daftar.reduce((hasil, m) => {
        hasil[m.huruf] = (hasil[m.huruf] ?? 0) + 1;
        return hasil;
    }, { A: 0, B: 0, C: 0, D: 0, E: 0 });
    
export function statistik(daftar) {
    const akhir = ambilKolom(daftar, "akhir");
    const jumlahLulus = daftar.filter((m) => m.status === "Lulus").length;
    return {
        jumlahMahasiswa: daftar.length,
        rataRata: rataRata(akhir),
        tertinggi: tertinggi(akhir),
        terendah: terendah(akhir),
        jumlahLulus,
        persenLulus: Math.round((jumlahLulus / daftar.length) * 100),
    };
}