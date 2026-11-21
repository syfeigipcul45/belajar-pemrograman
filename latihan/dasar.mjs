const nama = "Ani";
let nilai = 72;
nilai += 5;
const status = nilai >= 75 ? "Lulus" : "Remedial";
console.log(`${nama}: ${nilai} (${status})`);

function hurufMutu(n) {
    if (n >= 85) return "A";
    if (n >= 75) return "B";
    if (n >= 65) return "C";
    if (n >= 50) return "D";
    return "E";
}
for (const n of [90, 77, 64, 40]) {
    console.log(n, hurufMutu(n));
}
const stok = 0;
console.log(stok || "kosong", stok ?? "kosong");

const nilaiMutu = (n) => {
    if (n >= 85) return "A";
    if (n >= 75) return "B";
    if (n >= 65) return "C";
    if (n >= 50) return "D";
    return "E";
};

const lulus = (n, batas = 65) => n >= batas ? "Lulus" : "Remedial";

for (const n of [90, 77, 64, 40]) {
    console.log(n, nilaiMutu(n), lulus(n));
}