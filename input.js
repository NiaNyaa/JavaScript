const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Masukkan nama Anda: ', (nama) => {
  console.log(`Halo, ${nama}!`);
  rl.close();
});
