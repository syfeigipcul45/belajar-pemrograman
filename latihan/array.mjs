import { daftarBarang } from "../lib/barang.js";
// 1. Nama semua barang
// const nama = daftarBarang.map((b) => b.nama);
// console.log(nama);

// // 2. Barang yang stoknya habis
// const habis = daftarBarang.filter((b) => b.stok === 0);
// console.log(habis.map((b) => b.nama));

// // 3. Barang dengan id 4
// console.log(daftarBarang.find((b) => b.id === 4));

// // 4. Apakah ada barang di atas Rp 8.000?
// console.log(daftarBarang.some((b) => b.harga > 8000));

// // 5. Total nilai persediaan
// const nilaiPersediaan = daftarBarang.reduce((t, b) => t + b.harga * b.stok,
//     0);
// console.log(nilaiPersediaan);

// // 6. Tiga barang termurah (tanpa mengubah daftarBarang)
// const termurah = [...daftarBarang].sort((a, b) => a.harga - b.harga).slice(0,
//     3);
// console.log(termurah.map((b) => `${b.nama} ${b.harga}`));

// // 7. Jumlah barang per kategori
// const perKategori = daftarBarang.reduce((hasil, b) => {
//     hasil[b.kategori] = (hasil[b.kategori] ?? 0) + 1;
//     return hasil;
// }, {});
// console.log(perKategori);

// Nama barang kategori Minuman yang stoknya di bawah 10
const minuman = daftarBarang.filter((b) => b.kategori === "Minuman" && b.stok < 10);
console.log(minuman.map((b) => b.nama));

// rata-rata harga semua barang
const rataHarga = daftarBarang.reduce((t, b) => t + b.harga, 0) / daftarBarang.length;
console.log(rataHarga);

// total stok kategori "Alat Tulis"
const totalStokAlatTulis = daftarBarang.filter((b) => b.kategori === "Alat Tulis")
    .reduce((t, b) => t + b.stok, 0);
console.log(totalStokAlatTulis);

// apakah semua barang punya harga di atas Rp 1.000?
console.log(daftarBarang.every((b) => b.harga > 1000));