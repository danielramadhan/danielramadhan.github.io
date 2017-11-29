function trip(uangAwal) {
  uangAwal = 500000;
var gojek = 35000;
console.log('naik gojek ' + gojek);
var kereta = 110000;
console.log('naik kereta '+ kereta);

var jalanWisata = 50000;
var jalanMall = 100000;

var jalan2 = 'wisata';
if(jalan2 === 'wisata') {
  console.log('jalan2 '+ jalanWisata);
} 
else if
  (jalan2 === 'mall') {
  console.log('jalan '+ jalanMall);
  }
  
  var arr = [35000, 110000, 50000];
  var sisa = 0;
   for(var i = 0; i < arr.length; i++) {
     var hasil = arr[i];
     sisa = sisa + hasil
   }
console.log('total pengeluaran ' + sisa)

var sisaUang = uangAwal - sisa;

  return sisaUang
}

console.log('sisa uang ' +(trip()));
            