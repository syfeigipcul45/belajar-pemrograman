const keranjang = [{ nama: "Buku", harga: 5000 }];
let total = 0;
for (let i = 0; i < keranjang.length; i++) {
  total += keranjang[i].harga;
}
console.log(total);