async function ambilProduk() {
    const res = await
        fetch("https://dummyjson.com/products?limit=5&select=title,price,stock");
    if (!res.ok) {
        throw new Error(`Server menjawab ${res.status}`);
    }
    const data = await res.json();
    return data.products;
}

ambilProduk()
    .then((produk) => console.log("then:", produk))
    .catch((err) => console.log("catch:", err.message));

async function ambil(url) {
    const res = await fetch(url);
    console.log("Status:", res.status, "ok:", res.ok);
    if (!res.ok) throw new Error(`Server menjawab ${res.status}`);
    return res.json();
}

try {
    const data = await ambil("https://dummyjson.com/products?limit=3&select=title,price,stock");
    console.log("Total di server:", data.total);
    data.products.forEach((p) => console.log(p.id, p.title, p.price, p.stock));

    await ambil("https://dummyjson.com/products/99999");
} catch (err) {
    console.log("Ditangkap:", err.message);
}