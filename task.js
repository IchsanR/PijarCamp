// Soal 1
const nama = "Ichsan Mokodompit";
const email = "ichsan.ramadhan32@gmail.com";
const address =
  "Jalan Pogidon 9, Kelurahan Maasing, Kecamatan Tuminting. Kota Manado";
const isMerried = false;
let hobbies = ["Musik", "Olahraga"];

// Soal 2
let printGenapGanjil = 5;
for (let i = 1; i < printGenapGanjil; i++) {
  while (i % 2 === 0) {
    console.log(i + " merupakan bilangan genap");
    i++;
  }
  console.log(i + " merupakan bilangan ganjil");
}

// Soal 3
function printSegitiga(x) {
  let angkaAwal = 0;
  for (let i = 0; i <= x; i++) {
    for (let j = 0; j <= i; j++) {
      angkaAwal += 1 + i;
    }
    angkaAwal += "\n";
  }
  return console.log(angkaAwal);
}

printSegitiga(5);
