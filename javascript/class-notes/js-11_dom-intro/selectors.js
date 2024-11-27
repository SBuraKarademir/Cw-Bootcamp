console.log("***** SELECTORS *****");

document.title = "Merhaba c-18"

//*===========================================
//*            GETELEMENTBYID()
//*===========================================

console.log(document.getElementById("add-new-item"))

//? id'si add-new-item olan elementi secer
const headerText = document.getElementById("add-new-item")


//! secilen elementin style propertysini manipule ettik
//? her sey key-value şeklinde yazılır.
headerText.style.color = "blue"
headerText.style.backgroundColor = "yellow"
headerText.style.border = "2px solid red"
//! NOTE: property 'ler de kebap-case değil camelCase notasyonu kullanılır.

const addBtn = document.getElementById("btn")
console.log(addBtn)


 //headerText.style = "font-family: tahoma; font-size: 40px" //? CCS vari erişim

 //? HTML elementlerininin İçerikleri okuma ve değiştirme
//?----------------------------------------

const htmlLi = document.getElementById("html-li")
console.log(htmlLi)
htmlLi.style.color="red"

//? bir text elementinin içeriği aşağıdaki attribute'ler ile degisitirlebilir.
//! textContent, innerText, innerHTML

console.log(htmlLi.textContent)

htmlLi.textContent = "<h2>HTML5</h2>"

document.getElementById("js-li").innerText = "<h2>JS</h2>"

document.getElementById("react-li").innerHTML = "<h2 style='color:red;'>React JS</h2>"

//?! input'ların degerinin okunması/yazılması
const myInput = document.getElementById("input")
console.log(myInput.value)

// myInput.addEventListener("click", (e)=>{
//     console.log(e.target.value)
// })


addBtn.value = "Submit"

//*===========================================
//*          GETELEMENTSBYTAGNAME()
//*===========================================

//*===========================================
//*          GETELEMENTSBYCLASSNAME()
//*===========================================

//* ==========================================
//*              QUERYSELECTOR()
//* ==========================================

//* ==========================================
//*              QUERYSELECTORALL()
//* ==========================================
