const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("1. Penjumlahan");
console.log("2. Pengurangan");
console.log("3. Perkalian");
console.log("4. Pembagian");
r1.question('Pilihan:', (pil) => {
    if (pil == 1) {
        r1.question("Masukkan Angka pertama:", (t1) => {
            r1.question("Masukkan Angka kedua  :", (t2) => {
                t1 = parseInt(t1);
                t2 = parseInt(t2);
                let hasil = t1 + t2;
                console.log(`Hasil dari ${t1} + ${t2} adalah ${hasil}`);
                r1.close();
            });
        });
    }
    else if (pil == 2) {
        r1.question("Masukkan Angka pertama:", (k1) => {
            r1.question("Masukkan Angka kedua  :", (k2) => {
                k1 = parseInt(k1);
                k2 = parseInt(k2);
                let hasil2 = t1 - t2;
                console.log(`Hasil dari ${k1} - ${k2} adalah ${hasil2}`);
                r1.close();
            });
        });
    }
    else if (pil == 3) {
        r1.question("Masukkan Angka pertama:", (kl1) => {
            r1.question("Masukkan Angka kedua  :", (kl2) => {
                kl1 = parseInt(kl1);
                kl2 = parseInt(kl2);
                let hasil3 = kl1 * kl2;
                console.log(`Hasil dari ${kl1} x ${kl2} adalah ${hasil3}`);
                r1.close();
            });
        });
    }

    else if (pil == 4) {
        r1.question("Masukkan Angka pertama:", (b1) => {
            r1.question("Masukkan Angka kedua  :", (b2) => {
                b1 = parseInt(b1);
                b2 = parseInt(b2);
                let hasil4 = b1 / b2;
                console.log(`Hasil dari ${b1} : ${b2} adalah ${hasil4}`);
                r1.close();
            });
        });
    }
});
