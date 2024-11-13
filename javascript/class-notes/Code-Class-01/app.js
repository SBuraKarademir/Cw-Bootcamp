// 1-Condiditional 
// 2-Loop 
// 3-Function 
// 4-String 
/* -------------------------------------------------------------------------- */
// 1-Condiditional 
// Kare mi Dikdörtgen mi? (Conditional ve Function)
//  İki kenar uzunluğu verilen(fonksiyona parametre olarak gönderelim) bir şeklin kare mi dikdörtgen mi olduğunu belirleyen bir fonksiyon yaz.
let kenar1=50
let kenar2=40

function check(a,b){
// if (a==b){
//     console.log("Kare")}
// else{
//     console.log("dikdörtgen")
// }
// 

a==b ? console.log("Kare") : console.log("Dikdörtgen")

}


check(kenar1,kenar2)
/* -------------------------------------------------------------------------- */
// Çözüm2:
// let x = 4;
// let y = 6;
// function isSquareOrRectangle(a, b) {
//     if (a === b) return true
//     return false;
// }
// const result = isSquareOrRectangle(x, y) ? "Square" : "rectangle"
// console.log(result);
/* -------------------------------------------------------------------------- */
//Çözüm3:
// function sekıl(kenar1,kenar2){
//     return result=kenar1===kenar2? "kare":"dikdörtgen"
// }
// console.log(sekıl(kenar1,kenar2));



// 2-Sabah Rutininde Eksik Yapılan İşlerin Tespiti (Conditional-function)
 // Sabah rutininizi temsil eden görevlerin (örneğin yüz yıkama, diş fırçalama, kahvaltı yapma) her biri için tamamlanıp tamamlanmadığını soran bir fonksiyon yazınız. Eğer herhangi bir görev tamamlanmamışsa “Sabah rutininizde eksikler var” mesajını verin.

// -Örnek
// yüz yıkama:Evet
// Dis Fırcalama:Evet 
// Kahvaltı: Evet

// Output: Sabah rutininizi tamamlama başarıyla tamamlandı!
// Biri eksik olduğunda 
// -Sabah rutininizde eksikler var.

Çözüm1:
let yüzyıkama=true;
let dişfırcalama=false;
let kahvaltı=false;

function rutin(){
   return yüzyıkama && dişfırcalama && kahvaltı? "Rutinler başarıyla tamamlandı" :"Rutinde eksikler var"
//    return yüzyıkama || dişfırcalama || kahvaltı ?"Rutinde eksikler var" :"Rutinler başarıyla tamamlandı"
}
console.log(rutin());

// 3-loop ve conditional 
// Kullanıcı adı ve parola kontrolü yap. Doğru ise ismiyle karşıla değilse tekrar girmesi için yönlendir. 3 kez yanlış giriş olursa çıkış yapsın


// if yapısında tek başına continue-break kulanılmaz sadece loop içinde kullaılabilir

let username = "Ali";
let password = 1234;
let hak = 3;

const login=()=>{
    while(hak>0){
        let girilenUserName=prompt("Kullanıcı adını Giriniz:")
        let girilenPassword=prompt("Parola Giriniz:")

        if (girilenUserName===username && girilenPassword===password){
            return alert(`Hoşgeldiniz ${username}`)
        }
        else{
            hak--;
            (hak>0)? alert(`Hatalı giriş. Kalan Hak ${hak}`) : alert("Hakkınız doldu")
           
        }
    }

}

login()
/* -------------------------------------------------------------------------- */
// Flag kullanımı ile 
// let username = "user"
// let password = "123"
// let count = 0;
// let flag = true;

// while (flag) {
//     count++;
//     let enterusername = prompt("Kullanıcı Adınızı giriniz");
//     let enterPassword = prompt("Parolanızı giriniz");
//     if (count == 3) {
//         console.log("Giriş hakkınız doldurdunuz");
//         break;
//     }
//     if (username == enterusername && password == enterPassword) {
//         console.log("Kullanıcı adınız ve parolanız doğru");
//         flag = false;
//     }
//     else {
//         console.log(`parolanız yanlış kalan hakkınız ${3 - count}`);
//     }
// }
/* -------------------------------------------------------------------------- */
// let username = "Ali";
// let password = 1234;
// let hak = 3;

// const ornek2 = () => {
//   for (i = 0; i <= hak; i++) {
//     if (username === "Ali" && password === 1234) {
//       console.log("başarıyla girdiniz");
//       break;
//     } else if (username != "Ali" || parola != 1234) {
//       console.log("Kullanıcı adı veya Parola yanlış");
//       break;
//     }
//   }
// };

// ornek2();


//4-String Bir cümlenin içinde belirli bir harfin kaç defa geçtiğini bulan bir fonksiyon yaz. Kullanıcı cümleyi ve harfi girdiğinde, bu harfin cümlede kaç kez geçtiğini döndür.

// Merhaba , a kaç tane a harfi var  2 tane

const countLetter=(word,letter)=>{
let counter=0;
for (let i=0; i<word.length;i++){
    if (word[i]===letter) counter++


}
return counter
}

console.log( countLetter("Merhaba","a"))

/* -------------------------------------------------------------------------- */
// Çözüm 2:
// return word.split("a").length-1







// 5-Elektrik Faturası Hesaplama (Loop ve Conditional)
// Bir kişinin elektrik tüketimine göre fatura hesaplayan bir fonksiyon yaz. Elektrik birim fiyatı 0.5 TL ve her 100 birimden sonra ekstra %5 vergi ekleniyor. Kullanıcıdan aylık tüketimini al ve 100 birimlik aralıklar halinde faturasını hesapla. Sonucunda, tüm aralıklar ve toplam maliyet çıktı olarak verilsin.


// 6. Yıllık Faiz Hesaplama (Loop ve Function)
// Bir miktarın yıllık bileşik faizini hesaplayan bir fonksiyon yaz. Başlangıç miktarını, faiz oranını ve yıl sayısını kullanıcıdan alarak her yılın sonunda birikmiş toplam miktarı göster. Bileşik faiz, her yıl sonu miktarına eklenerek hesaplanır.


// 7.Bir arkadaşınız, uzun bir metnin içinde gizli bir kelime olduğunu söylüyor ve bu kelime büyük harfle yazılı. Metin içinde sadece büyük harfleri alarak gizli kelimeyi bulan bir fonksiyon yazın.
