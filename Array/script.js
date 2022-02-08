/* array adalah tipe data yang digunakan untuk mendeskripsikan kumpulan elemen (nilai atau variabel), yang tiap-tiap elemennya memiliki index.

array adalah variabel yang bisa menyimpan banyak nilai.

contoh : 
const days = ['monday','tuesday','wednesday'];

reason why we use array?
mempermudah pengelolaan nilai/value





index pada array dimulai dari nol. di javascript elemen pada array boleh beda tipe,

contoh : 

let myarr = ['teks', 2, false];





array juga bisa digunakan untuk menyimpan function, contoh:

const myfunct =  name =>  console.log('name ' + nama);

const myarr = ['thursday', 12.30, myfunct, true];

console.log(myarr);




kita juga bisa menyimpan array didalam array, contoh: 

const myarr = [12,true,'hello',[1,2,3,4,5]];

console.log(myarr);

untuk mengakses array bercabang :

let arr = ['hello', false, 2, [1,2,3]];

console.log(arr[3][1]);




manipulasi array : menggunakan method 

1. join() : merubah isi array menjadi string
let myarr = ['satrio','utomo','andika'];
console.log(myarr.join());

2. push : menambah isi array diakhir array
let myarr = ['satio', 'utomo', 'andika'];
myarr.push('rasel');
console.log(myarr.join());

3. pop : menghilangkan array diakhir array
let myarr = ['satrio', 'utomo', 'andika', 'rasel'];
myarr.pop();
console.log(myarr.join());

4. unshift : menambahkan array diawal array
let myarr = ['satrio', 'utomo', 'andika'];
myarr.unshift('rasel');
console.log(myarr);

5. shift : menghapus array diawal array
let myarr = ['satrio', 'utomo', 'andika', 'rasel', 'rahmat'];
myarr.shift();
console.log(myarr.join());

6. splice : menyambung array
let myarr = ['satrio', 13, false, 'utomo', 23, true];
myarr.splice(3,0,fitri);//akan menambahkan satu array fitri
myarr.splice(3,2);//akan menghapus array utomo dan 23
console.log(myarr.join());

7. slice : mengiris array menjadi array baru
let myarr = ['satrio', 13, false, 'utomo', 23, true];
let myarr2 = myarr.slice(2,4);//ini akan mengambil false dan utomo, index awal terbawa dan index akhir tidak
console.log(myarr2.join());


8. forEach : adalah bentuk lain dari looping for sehingga lebih efektif
let angka = [1,2,3,4,5,6,7];
for (let i = 0; i<angka.length; i++){
    console.log('anda mendapatkan nomor urut ' + angka[i]);
}
jika menggunakan forEach akan seperti ini : 
angka.forEach(function(e){
    console.log('anda mendapatkan nomor urut ' + e);
})


9. map : sama dengan forEach, namun map membuat array baru 
let angka = [1,4,2,6,2,5];
let angka2 = angka.map(function(e){
    return e*2;
})
console.log(angka2);


10. sort: untuk menyortir atau mengurutkan array yang acak
let angka = [1,4,2,6,2,5];
angka.sort();
console.log(angka);


11. filter : mencari nilai pada array dan mengembalikkannya dalam bentuk array
var angka = [1,3,5,2,6,8];
var angka2 = angka.filter(function(e){
    return e > 3;
})
console.log(angka2.join(' - '));


12. find : untuk menemukan satu nilai yang terdekat dari nilai yang dicari
let angka = [1,3,5,4,2,6,8];
let angka2 = angka.find(function(e){
    return e > 2;
})
console.log(angka2);

link untuk mengecek method yang ada pada array : 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Object/Array

*/


// var myarr3 = ['teks', 2, false,'hi',[4,5,6]];

// console.log(myarr3[4][1])



let angka = [1,3,2,5,7,4,6,8];
let angka2 = angka.find(function(e){
    return e > 5;
})
console.log(angka2);