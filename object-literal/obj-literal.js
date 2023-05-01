// note object literal

// let mahasiswa = {
//   nama: "Aditya",
//   energi: 10,
//   makan: function (porsi) {
//     this.energi = this.energi + porsi;
//     console.log(`selamat makan ${this.nama}`);
//   },
// };

// mahasiswa.makan(2);
// console.log(mahasiswa.energi);
// // note : kalau object literal deklarasi nama mahasiswa harus berbeda/tidak boleh sama
// let mahasiswa2 = {
//   nama: "DODI",
//   energi: 10,
//   makan: function (porsi) {
//     this.energi = this.energi + porsi;
//     console.log(`selamat makan ${this.nama}`);
//   },
// };

// mahasiswa2.makan(2);
// console.log(mahasiswa2.energi);

//note function declaration
// function mahasiswa(nama, energi) {
//   let mahasiswa = {};
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;

//   mahasiswa.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`selamat makan ${this.nama}`);
//   };
//   // in function declaration we need to return the function
//   return mahasiswa;
// }
// // note instantiation function declaration
// let aditya = mahasiswa("aditya", 20);
// aditya.makan(3);
// console.log(aditya.energi);

// let oryza = mahasiswa("oryza", 10);
// oryza.makan(3);
// console.log(oryza.energi);

//note constructor declarations
function mahasiswa(nama, energi) {
  this.nama = nama;
  this.energi = energi;

  this.makan = function (porsi) {
    this.energi += porsi;
    console.log(`selamat makan ${this.nama}`);
  };
  this.main = function (jam) {
    this.energi += jam;
    console.log(`selamat main ${this.nama}`);
  };
}
// note  using new
let aditya = new mahasiswa("aditya", 20);
aditya.makan(3);
console.log(aditya.energi);

let oryza = new mahasiswa("oryza", 10);
oryza.makan(3);
console.log(oryza.energi);
