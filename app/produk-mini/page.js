export default function ProdukMini() {
  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-100">
      <nav className="flex items-center justify-between bg-slate-900 px-6 py-4 text-white">
        <span className="text-xl font-bold">TokoKita</span>
        <div className="flex gap-6 text-sm">
          <a href="#produk" className="hover:text-teal-300">Produk</a>
          <a href="#kontak" className="hover:text-teal-300">Kontak</a>
        </div>
      </nav>

      <main className="mx-auto max-w-5xl px-4 py-10">
        <h1 className="mb-6 text-2xl font-bold md:text-4xl">Produk Unggulan</h1>
        <section id="produk" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <article className="rounded-xl border border-slate-200 p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
            <h2 className="text-lg font-semibold">Kopi Toraja 250 g</h2>
            <p className="mt-1 text-slate-600">Biji kopi arabika sangrai sedang.</p>
            <p className="mt-4 text-xl font-bold text-teal-700">Rp85.000</p>
          </article>
          <article className="rounded-xl border border-slate-200 p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
            <h2 className="text-lg font-semibold">Gula Aren 500 g</h2>
            <p className="mt-1 text-slate-600 dark:text-slate-300">Gula aren cetak tanpa pengawet.</p>
            <p className="mt-4 text-xl font-bold text-teal-700 dark:text-teal-300">Rp32.000</p>
          </article>
          <article className="rounded-xl border border-slate-200 p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800">
            <h2 className="text-lg font-semibold">Teh Hijau 100 g</h2>
            <p className="mt-1 text-slate-600 dark:text-slate-300">Daun teh pilihan dari dataran tinggi.</p>
            <p className="mt-4 text-xl font-bold text-teal-700 dark:text-teal-300">Rp27.500</p>
          </article>
        </section>
      </main>
    </div>
  );
}