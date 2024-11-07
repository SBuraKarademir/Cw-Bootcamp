//? ====================================================
// ?              FONKSİYONLAR - IIFE
// ? ====================================================

//**Immediately Invoked Function Expression (IIFE) yani "Hemen Çağrılan Fonksiyon İfadesi" */

const topla=(num)=>{
    console.log("toplam:",65+98)
}

//invoke - call
topla(34);

/* -------------------------------------------------------------- */

(function(){
    console.log("merhaba")
})();

//* parametre ile kullanımı

(function(num){
    console.log("merhaba",num)
})(67);

// birinci gönderilen taban,2. gönderilen üs olacak şekilde verilen sayının kuvvetini bulan kod bloğunu yazın

(function(x,y){
   console.log(Math.pow(x,y)) 
})(5,9)

let sonuc=(function(x,y){
   return Math.pow(x,y)
})(5,9)

console.log(sonuc)


// Değişken Kapsülleme ------- TODO ----
