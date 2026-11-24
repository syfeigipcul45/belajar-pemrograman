export default function Tombol() {
    return (
        <button className="rounded-lg bg-teal-700 px-4 py-2 font-semibold text-white">
            Simpan
        </button>
    );
}

function Profile(props) {
  // ❌ Salah: props tidak boleh diubah di dalam komponen
  props.name = "Nama Baru";
  return <p>Halo, {props.name}</p>;
}
