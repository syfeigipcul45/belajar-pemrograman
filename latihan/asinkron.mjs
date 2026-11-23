async function ambilAngka() {
    return 42;
}

const salah = ambilAngka();
console.log("tanpa await:", salah);

const benar = await ambilAngka();
console.log("dengan await:", benar);