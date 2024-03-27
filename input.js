const { read } = require('fs');
const readline = require('readline');

const r1 =readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question('Masukkan Nama:', (nama) => {
r1.question('Masukkan Umur:', (umur) => {

console.log(`Namamu adalah ${nama}`);
console.log(`umurmu ${umur}`);
r1.close();
});
});
