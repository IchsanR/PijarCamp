// Soal 1
function ganjilGenap(x) {
  let printGenapGanjil = x;
  for (let i = 1; i < printGenapGanjil; i++) {
    while (i % 2 === 0) {
      console.log(i + " merupakan bilangan genap");
      i++;
    }
    console.log(i + " merupakan bilangan ganjil");
  }
}
ganjilGenap(5);

function polaSegitiga(x) {
  let angkaAwal = 0;
  for (let i = 0; i <= x; i++) {
    for (let j = 0; j <= i; j++) {
      angkaAwal += 1 + i;
    }
    angkaAwal += "\n";
  }
  return console.log(angkaAwal);
}

polaSegitiga(5);

// Soal 2
/** Filter = filter() merupakan method array di JavaScript yang berfungsi untuk mencari semua elemen di dalam array yang sesuai dengan kriteria tertentu. 
Method ini mengembalikan array baru yang berisi elemen yang sesuai dengan kriteria yang dicari atau lulus pengujian fungsi callback. */
const values = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const value = values.filter((elemen) => elemen % 2 === 0);

console.log(value);

/** Push = Method array push() berfungsi untuk menambahkan satu atau lebih elemen ke akhir array termasuk array multidimensi, method ini mengembalikan panjang array baru. */
const mahasiswa = ["budi", "ucup"];
const panjang = mahasiswa.push("otong", "bambang");

console.log(mahasiswa);
console.log(panjang);

/** Pop = pop() merupakan method array di JavaScript yang berfungsi untuk menghapus elemen terakhir dari array.
Method ini mengubah panjang array dan mengembalikan elemen yang dihapus. */
const mhs = ["budi", "bambang", "ucup"];

const mahasiswaDihapus = mhs.pop();

console.log(mhs);
console.log(mahasiswaDihapus);

/** Reduce = reduce() merupakan method array di JavaScript yang mengeksekusi fungsi callback pada setiap elemen array, nilai hasil kalkulasi pada elemen sebelumnya digunakan untuk melakukan kalkulasi pada elemen berikutnya. */
const arrAngka = [1, 2, 3, 4, 5];

const result = arrAngka.reduce((nilaiSebelumnya, nilaiSaatIni) => {
  return nilaiSebelumnya + nilaiSaatIni;
});

console.log(result);

// Soal 3
let data = {
  id: 1,
  name: "budi pratama",
  gender: "female",
  height: "165cm",
  educational: [
    {
      priode: "2003-2016",
      school: "Kalam kudu High School",
      major: "-",
    },
  ],
  phone: {
    primary: "0812312323",
    secondary: "0082342343",
  },
};

let newEducation = {
  priode: "2016-2020",
  school: "State Univerity Jakarta",
  major: "Accountancy",
};

// Soal 3.a
let data2 = {
  name: "Ichsan Mokodompit",
  phone: {
    primary: "085255402560",
    secondary: "085255555555",
  },
};

let data3 = { data };
data3 = { ...data, ...data2 };
console.log(data3);

// Soal 3.b
// Tanpa destructuring
const primary = data.phone.primary;
const secondary = data.phone.secondary;
// Setelah destructuring
const { primary, secondary } = data.phone;

// Soal 3.c
let education = { data };
education = { ...data, ...newEducation };
console.log(education);

// Soal 4
function barang(jumlah, harga) {
  let total = harga * jumlah;
  let diskon = 0;

  if (total >= 60000) {
    diskon = 0.35;
  }

  let totalDiskon = total * diskon;

  if (totalDiskon > 50000) {
    diskon = 50000;
  }
  if (diskon == 50000) {
    totalDiskon = 50000;
  }

  let hasil = 0;
  if (diskon == 0) {
    hasil = total;
  } else if (diskon < 50000) {
    hasil = total - totalDiskon;
  } else if (diskon >= 50000) {
    hasil = total - diskon;
  }

  return console.log(
    `total harga = ${total},
    potongan = ${totalDiskon},
    subtotal =  ${hasil}`
  );
}

barang(3, 25000);
