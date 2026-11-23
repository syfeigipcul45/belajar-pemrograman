import dayjs from "dayjs";
import "dayjs/locale/id.js";
import { ambilProduk } from "@/lib/api";
import { formatRupiah, singkat } from "@/lib/format";

dayjs.locale("id");

export const metadata = { title: "Produk dari API" };

const KURS = 18000;

export default async function HalamanProdukApi({ searchParams }) {
    const { q = "" } = await searchParams;
    const { data, total, error } = await ambilProduk(q);

    return (
        <main className="mx-auto max-w-5xl p-6">
            <h1 className="text-2xl font-bold">Produk dari API</h1>
            <form className="mt-4 flex gap-2" action="/produk-api">
                <label htmlFor="q" className="sr-only">Cari produk</label>
                <input id="q" name="q" defaultValue={q} placeholder="Cari, misalnya phone"
                    className="flex-1 rounded-lg border px-3 py-2" />
                <button className="rounded-lg bg-teal-700 px-4 py-2 font-semibold
text-white">Cari</button>
            </form>
            {error ? (
                <div role="alert" className="mt-6 rounded-lg border border-red-300
bg-red-50 p-4 text-red-800">
                    <p className="font-semibold">Gagal memuat produk.</p>
                    <p className="text-sm">{error}. Periksa koneksi internet lalu muat
                        ulang halaman.</p>
                </div>
            ) : data.length === 0 ? (
                <p className="mt-6 rounded-lg border border-dashed p-6 text-center
text-slate-600">
                    Tidak ada produk yang cocok dengan &quot;{q}&quot;.
                </p>
            ) : (
                <>
                    <p className="mt-4 text-sm text-slate-600">
                        Menampilkan {data.length} dari {total} produk{q && ` untuk
"${q}"`}.
                    </p>
                    <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-
cols-3">
                        {data.map((p) => (
                            <li key={p.id}>
                            {/* <li key={p.id} className="rounded-xl border p-4"> */}
                                 {/* <p className="text-xs uppercase text-slate500">{p.category}</p>
                                <h2 className="font-semibold">{p.title}</h2>
                                <img src={p.thumbnail} alt={p.title} className="my-2 h-32 w-full rounded-lg object-cover" />
                                <p className="mt-2 text-lg font-bold">{formatRupiah(p.price *
                                    KURS)}</p>
                                <p className={p.stock < 10 ? "text-sm text-red-700" : "textsm text-slate-600"}>
                                    Stok {p.stock}
                                </p> */}
                                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                                    <img className="w-full" src={p.thumbnail} alt={p.title} />
                                        <div className="px-6 py-4">
                                            <div className="font-bold text-xl mb-2">{p.title}</div>
                                            <p className="font-bold text-gray-700 text-base">
                                                {formatRupiah(p.price * KURS)}
                                            </p>
                                            <p className={p.stock < 10 ? "text-sm text-red-700" : "text-sm text-slate-600"}>
                                                Stok {p.stock}
                                            </p>
                                            <p className="text-gray-700 text-base">
                                                {singkat(p.description, 50)}
                                            </p>
                                        </div>
                                        <div className="px-6 pt-4 pb-2">
                                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{p.category}</span>
                                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Rating: {p.rating}</span>
                                        </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </>
            )}
            <p className="mt-8 text-xs text-slate-500">
                Diperbarui {dayjs().format("dddd, D MMMM YYYY HH:mm")}
            </p>
        </main>
    );
}
