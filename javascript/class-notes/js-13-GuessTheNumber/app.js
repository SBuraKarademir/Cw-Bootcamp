
//1-Öncelikle bilgisayar bir sayı tutsun
const rastgeleSayi=Math.ceil(Math.random()*20 )
const again=document.querySelector(".again")
const guess=document.querySelector(".guess")
const check=document.querySelector(".check")
const message=document.querySelector(".msg")
console.log("rastgeleSayi:",rastgeleSayi)

//! 2- Check butonuna basılınca olacaklar - check tetiklenmeli 
// check.onclick=()=>{}
check.addEventListener("click",()=>{
    const tahmin=guess.value;
    
    //! Tahminde kaç durum çıkar
    //? 1-Bir değer girmediyse checke basmasın
    //? 2-Alt üst sınırı kontrol et    
    //? 3-Tahminin doğru oluşu
    //? 4-Tahmini yanlışsa arttır azalt kontrolü
    //? 5-Hak bitebilir


    //? 1-Bir değer girmediyse checke basmasın-Bo boş basılsını engelleme :) 
    if (!tahmin){
        // tahminin içi doluysa true  - !tahmin : tahminin false olması yani içinin boş yada null,undefined
        message.textContent="Lütfen bir tahmin giriniz"
    }
     //? 2-Alt üst sınırı kontrol et
    else if (tahmin<0 || tahmin>20){
        message.textContent="0-20 arasında bir değer giriniz"
    }
     //? 3-Tahminin doğru oluşu 
    else if(tahmin==rastgeleSayi){
        console.log("TEbrikler")

    }



    
    
})
