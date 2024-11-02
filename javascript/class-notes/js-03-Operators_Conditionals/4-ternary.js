//!  ************  TERNARY OPERATOR ************
// Şarta bağlı durumlar yazmak için başka ve daha kısa bir yöntem de ternary operator
// ES6 ile gelen bir özellik 

let yas=30

if (yas>=18){
    console.log("oy kullanabilirsin")
}
else{
    console.log("Oy kullanamazsın")
}

// 1.kullanım

yas>=18 ? console.log("oy kullanabilirsin") :console.log("oy kullanamazsın")

yas>18 ? console.log("oy kullanabilir") : null

//2.kullanım  (daha yaygın)
console.clear()
let message= yas>18 ? "oy kullanabilir" : "oy kullanamaz"
console.log(message)

