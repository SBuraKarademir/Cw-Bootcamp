// * ============================================
//!            WHILE LOOP
// * ============================================
// JavaScript'te while döngüsü, bir koşul doğru olduğu sürece belirli bir kod bloğunu tekrar tekrar çalıştırmak için kullanılır. 

// while (şart){
//     yapılacak işlemler
// }
/* 


/ for sayısı belli bir döngü için idealdir. 
/ Belli bir şarta göre sayısı sürekli devam edecekse.Kullanıcıya devam etmek istermisin sorusu gibi soru ile
-------------------------------------------------------------------------- */
let i=0;
while (i<=10){
    console.log(i)
    i++
}

/* -------------------------------------------------------------------------- */
// kullanıcı şifreyi bulana kadar sorsun
let password;


while (password!=="12m.%"){
    password=prompt("Şifreyi giriniz:")
}