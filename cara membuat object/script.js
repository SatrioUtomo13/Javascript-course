// cara untuk membuat objek pada javascript
// 1. object literal
/*membuat object literal hanya membutuhkan kurung kurawal,
artinya kita akan memasukkan objectnya langsung, didalam object ada 
yang namanya properti dan method,method adalah function 
yang ada didalam object, nama adalah contoh properti sedangkan makan adalah contoh method.
properti diisi dengan value sedangkan method diisi dengan function

kekurangan menggunakan object literal:
1. kurang efektif karena harus membuat instansiasi object berulang sehingga boros memory
2. jika membuat object baru, nama object tidak boleh sama dengan nama object sebelumnya

*/

//penggunaan string literal menggunakan back tick

// let mahasiswa = {
// 	nama : 'satrio',
// 	energi : 10,
// 	makan : function(porsi) {
// 		this.energi += porsi;
// 		console.log(`Halo ${this.nama}, selamat makan`);
// 	}
// }

// let mahasiswa2 = {
// 	nama : 'utomo',
// 	energi : 10,
// 	makan : function(porsi) {
// 		this.energi += porsi;
// 		console.log(`Halo ${this.nama}, selamat makan`);
// 	}
// }










// 2. function declaration
/*keuntungan menggunakan function declaration adalah kita tidak perlu menduplikat object
 seperti pada
function literal. membuat fanction declaration yaitu denan cara menambahkan function diawal. 
pertama kita membuat templatenya terlebih dahulu, tidak langsung membuat objectnya, didalamnya
kita deklarasikan terlebih dahulu bahwa kita akan membuat object, caranya dengan membuat
 variabel baru dan didalamnya terdapat object kosong. 
 jangan lupa untuk menambahkan return diakhir functionnnya.
 saat dijalankan di console log, yang
 tampil yaitu functionnya, bukan objectnya karena kita baru membuat blueprintnya, jadi kita 
 harus instansiasi kembali, (lihat baris ke 65).*/

// function Mahasiswa(nama, energi){
// 	let mahasiswa = {};
// 	mahasiswa.nama = nama;
// 	mahasiswa.energi = energi;

// 	mahasiswa.makan = function(porsi){
// 		this.energi += porsi;
// 		console.log(`Halo ${this.nama}, selamat makan`);
// 	}

// 	mahasiswa.main = function(jam){
// 		this.energi -= jam;
// 		console.log(`Halo ${this.nama}, selamat main`);
// 	}
// 	return mahasiswa
// }

// let satrio = Mahasiswa('satrio', 10);
// let utomo = Mahasiswa('utomo', 20 );












// 3. constructor function
/*
- function ini menggunakan keyword new (lihat baris 111)
- jika menggunakan construction function kita tidak perlu menuliskan variabel dan return
- nama variabel yang dihilangkan bisa diganti dengan keyword this

*/

// function Mahasiswa(nama, energi){
// 	this.nama = nama;
// 	this.energi = energi;

// 	this.makan = function(porsi){
// 		this.energi += porsi;
// 		console.log(`Halo ${this.nama}, selamat makan`);
// 	}

// 	this.main = function(jam){
// 		this.energi -= jam;
// 		console.log(`Halo ${this.nama}, selamat main`);
// 	}
	
// }

// let satrio = new Mahasiswa('satrio', 10);








// 4. Object.create()
/*
- perhatikan tanda koma (,) unexpected identifier
*/


// const methodMahasiswa = {
// 	makan: function (porsi){
// 		this.energi += porsi;
// 		console.log(`halo ${this.nama}, selamat makan`);
// 	},

// 	main: function (jam){
// 		this.energi -= jam;
// 		console.log(`halo ${this.nama}, selamat main`);
// 	},

// 	tidur: function (jam){
// 		this.energi += jam * 2;
// 		console.log(`halo ${this.nama}, selamat tidur`);
// 	}
// };

// function Mahasiswa (nama,energi){
// 	let mahasiswa = Object.create(methodMahasiswa);
// 	mahasiswa.nama = nama;
// 	mahasiswa.energi = energi;

// 	return mahasiswa;
// }

// let satrio = Mahasiswa('satrio', 10);
// let utomo = Mahasiswa('utomo', 20);






//										prototype



// function Mahasiswa (nama, energi){
// 	this.nama = nama;
// 	this.energi = energi;

// }


// Mahasiswa.prototype.makan = function(porsi){
// 	this.energi += porsi;
// 	return `halo ${this.nama}, selamat makan`;
// }

// Mahasiswa.prototype.main = function (jam){
// 	this.energi -= jam;
// 	return `halo ${this.nama}, selamat main`
// }

// Mahasiswa.prototype.tidur = function (jam){
// 	this.energi += jam * 2;
// 	return `halo ${this.nama}, selamat tidur`
// }

// let satrio = new Mahasiswa('satrio', 10);


//						versi class

class Mahasiswa {
	constructor(nama, energi){
		this.nama = nama;
		this.energi = energi;
	}

	makan (porsi){
		this.energi += porsi;
		return `halo ${this.nama}, selamat makan`;
	}

	main (jam){
		this.energi -= jam;
		return `halo ${this.nama}, selamat main`;
	}

	tidur (jam){
		this.energi += jam * 2;
		return `halo ${this.nama}, selamat tidur`;
	}
}

let satrio = new Mahasiswa ('satrio', 10);












 
