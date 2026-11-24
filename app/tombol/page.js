const WARNA = {
  habis: "bg-red-100 text-red-800",
  menipis: "bg-amber-100 text-amber-800",
  tersedia: "bg-emerald-100 text-emerald-800",
};

function statusStok(stok) {
  if (stok === 0) return "habis";
  if (stok < 10) return "menipis";
  return "tersedia";
}

function LabelStok({ stok }) {
  const status = statusStok(stok);
  return (
    <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${WARNA[status]}`}>
      {status === "habis" ? "Stok habis" : status === "menipis" ? `Menipis: ${stok}` : `Stok ${stok}`}
    </span>
  );
}

export default function Halaman() {
  const diskon = 0;
  return (
    <div className="space-y-3">
      <div className="flex gap-2"><LabelStok stok={0} /><LabelStok stok={5} /><LabelStok stok={120} /></div>
      <p>Jebakan: {diskon && <b>Diskon {diskon}%</b>}</p>
      <p>Benar: {diskon > 0 && <b>Diskon {diskon}%</b>}</p>
    </div>
  );
}