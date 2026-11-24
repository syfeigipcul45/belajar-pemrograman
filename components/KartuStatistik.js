export default function KartuStatistik({ label, nilai, peringatan = false }) {
  return (
    <div className={`rounded-xl border bg-white p-4 ${peringatan ? "border-amber-400" : "border-slate-200"}`}>
      <p className="text-sm text-slate-500">{label}</p>
      <p className="text-2xl font-bold">{nilai}</p>
    </div>
  );
}