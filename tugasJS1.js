// Soal 1
const biodata = {
  name: "Ichsan Mokodompit",
  age: 24,
  hobbies: ["Musik", "Membaca", "Gaming"],
  isMerried: false,
  schoolList: [
    {
      sma: {
        name: "SMA Negeri 9 Manado",
        yearIn: "2012",
        yearOut: "2015",
        major: "IPA",
      },
      kuliah: {
        name: "Universitas Sam Ratulangi",
        yearIn: "2015",
        yearOut: "2021",
        major: "Management",
      },
    },
  ],
  skills: [
    {
      skillName: "Javascript",
      level: "Beginner",
    },
    {
      skillName: "Microsoft Excel",
      level: "Intermediate",
    },
  ],
  interestedInCode: true,
};

// Soal 2
const mtk = 60;
const bahasaIndonesia = 80;
const bahasaInggris = 90;
const ipa = 70;

let a = true;

if (mtk == 0) {
  a = false;
}
if (ipa == 0) {
  a = false;
}
if (bahasaIndonesia == 0) {
  a = false;
}
if (bahasaInggris == 0) {
  a = false;
}

let rata = (mtk + bahasaIndonesia + bahasaInggris + ipa) / 4;

function cekNilai() {
  if (rata <= 59) {
    console.log(`Rata-rata = ${rata}
      Grade = E`);
  } else if (rata <= 69) {
    console.log(`Rata-rata = ${rata}
      Grade = D`);
  } else if (rata <= 79) {
    console.log(`Rata-rata = ${rata}
      Grade = C`);
  } else if (rata <= 89) {
    console.log(`Rata-rata = ${rata}
      Grade = B`);
  } else {
    console.log(`Rata-rata = ${rata}
      Grade = A`);
  }
}

if (a == true) {
  cekNilai();
} else {
  console.log("Harap masukkan nilai");
}

// Soal 3
function printSegitiga(x) {
  let a = "a";
  let angka = "";
  for (let i = x; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
      angka += j;
    }
    angka += "\n";
  }
  if (typeof x !== typeof a) {
    console.log(angka);
  } else {
    console.log("Data harus number");
  }
}

printSegitiga(5);

// Soal 4.a
let data = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
};

let data2 = {
  name: "Ichsan Mokodompit",
  email: "ichsan.ramadhan32@gmail.com",
  hobby: ["Membaca", "Gaming", "Musik"],
};

let data3 = { data };
data3 = { ...data, ...data2 };
console.log(data3);

// Soal 4.b
let { street, city } = data.address;
console.log(street);
console.log(city);
