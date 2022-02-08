//function declaration
/*
- menulisakan keyword function
- menuiskan nama fungsi diikuti parameter
- menulis body function
*/
// function tampilPesan (nama){
// 	alert(`hello ${nama}`);
// }

// tampilPesan ('satrio');








//function expression
/*
- membuat variabel terlebih dahulu
- variabel tersebut dijadikan function
*/

// let tampilPesan = function(nama){
// 	alert(`hello ${nama}`);
// }
// tampilPesan('satrio');








//arrow function
/*
- arrow function adalah sebuah function expression yang lebih
ringkas
- membuat variabel lalu diikuti dengan parameter dan tanda panah
- tanda panah dibuat dengan simbol = dan >
- jika parameternya satu tidak dibutuhkan tanda kurung ()
- jika didalamnya hanya terdapat return, kurung kurawal
dan return tidak dibutuhkan
- jika tanpa parameter wajib menuliskan ()
*/

// const tampilNama = (nama) =>{
// 	return `halo ${nama}`;
// }
// console.log(tampilNama('satrio'))


// const tampilNama = (nama, waktu) => {
// 	return `selamat ${waktu}, ${nama}`;
// }
// console.log(tampilNama('satrio', 'malam'));

//disebut dengan implisit return
// const tampilNama = nama => `halo ${nama}`;
// console.log(tampilNama('utomo'))

// const tampilNama = () => `hello world`;
// console.log(tampilNama());










//contoh lain menggunakan arrow function menggunakan map

//let mahasiswa = ['satrio', 'utomo', 'rasel'];

// let jumlahHuruf = mahasiswa.map(function(nama){

// 	return nama.length;
// })
// console.log(jumlahHuruf);

// let jumlahHuruf = mahasiswa.map(nama => nama.length);
// console.log(jumlahHuruf);

// let jumlahHuruf = mahasiswa.map(nama => ({ nama: nama, jmlHuruf: nama.length}));
// console.table(jumlahHuruf);



//konsep this pada arrow function

// const Mahasiswa = function() {
// 	this.nama = 'satrio';
// 	this.umur = 21;
// 	this.sayHello = function() {
// 		console.log (`hallo nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
// 	}
// }

// const satrio = new Mahasiswa();


//arrow function 

// const Mahasiswa = function () {
// 	this.nama = 'satrio';
// 	this.umur = 21;
// 	this.sayHello = () => {
// 		console.log (`hallo nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
// 	}
// }

// const satrio = new Mahasiswa();

//object literal

// const Mhs = {
// 	nama : 'satrio',
// 	umur : 21,
// 	sayHello :  () => {
// 		console.log (`hallo nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
// 	}
// }






// const Mahasiswa = function() {
// 	this.nama = 'satrio';
// 	this.umur = 21;
// 	this.sayHello = function() {
// 		console.log (`hallo nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
// 	}

// 	setInterval( () => {
// 		console.log(this.umur);
// 	}, 500);
// }

// const satrio = new Mahasiswa();



// const box = document.querySelector('.box');
// box.addEventListener('click', function() {
// 	// let satu = '.size';
// 	// let dua = '.caption';

// 	// if (this.classList.contains(satu)) {
// 	// 	[satu, dua] = [dua, satu];
// 	// }

// 	this.classList.toggle('size');
// 	setTimeout(() => {
// 		this.classList.toggle('caption');
// 	}, 600);
// })



let myfunc = function(e){
	return e *2;
}

console.log(myfunc(5));

















