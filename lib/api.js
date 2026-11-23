const BASE_URL = "https://dummyjson.com/products";

export const tunda = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function ambilProduk(kata = "") {
    const select = "title,price,stock,category,thumbnail,description,rating";
    const url = kata.trim()
        ? `${BASE_URL}/search?q=${encodeURIComponent(kata.trim())}&limit=12&select=${select}`
        : `${BASE_URL}?limit=12&select=${select}`;
    try {
        await tunda(1000);
        const res = await fetch(url, { cache: "no-store" });
        if (!res.ok) throw new Error(`Server menjawab ${res.status}`);
        const json = await res.json();
        return { data: json.products, total: json.total, error: null };
    } catch (err) {
        return { data: [], total: 0, error: err.message };
    }
}
