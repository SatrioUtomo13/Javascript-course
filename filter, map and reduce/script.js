const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// 1. filter : mencari angka 3
/*- digunakan untuk mencari suatu nilai

*/

// jika mencari angka 3 menggunakan looping akan seperti ini

// const newAngka = [];
// for(let i = 0; i < angka.length; i++){
// 	if(angka[i] >= 3 ) {
// 		newAngka.push(angka[i]);
// 	}
// }

// console.log(newAngka);

//mencari angka 3 menggunakan filter

// const newAngka = angka.filter( a => a >= 3);

// console.log(newAngka);



// 2. map 

/*- untuk memetakan tiap" elemen didalamnya menggunakan fungsi baru

*/

//membuat elemen baru yang sudah dikalikan 2

// const newAngka = angka.map(a => a *2 );
// console.log(newAngka);



//3. reduce: untuk melakukan sesuatu terhadap elemen aslinya
/*- reduce memiliki 2 parameter, accumulator dan currenvalue

*/
//jumlahkan seluruh elemen pada array

// const newAngka =angka.reduce((accumulator, currenvalue) => accumulator + currenvalue);
// console.log(newAngka);

// 4. method chaining: menggabungkan fungsi yang tadi kedalam satu eksekusi
// mencari angka > 5
// hasilnya kalikan 3
//jumlahkan

// const hasil = angka.filter(a => a > 5)
// 	.map(a => a * 3)
// 	.reduce((acc, cur) => acc + cur);

// console.log(hasil);




//membuat contoh yang lebih real, referensi wpu





//ambil semua elemen video
const videos = Array.from(document.querySelectorAll('[data-duration]'));


//pilih hanya yang javascript lanjutan
const jsLanjut = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))


//ambil durasi masing-masing video
 .map(item => item.dataset.duration)

//ubah durasi menjadi integer, ubah menit menjadi detik
 .map(waktu => {
 	const parts = waktu.split(':');
 })
 

//jumlah semua detiknya

//ubah formatnya jadi jam menit detik.

//simpan di DOM

console.log(jsLanjut);



















































