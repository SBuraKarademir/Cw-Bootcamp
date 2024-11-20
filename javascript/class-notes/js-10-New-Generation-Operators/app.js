console.log("**** NEW GEN OPERATORS *****");

//* =============================================
//*  DESTRUCTURING (OBJECT)
//* =============================================

const product = {
  id: "12345",
  brand: "Apple",
  type: "smart phone",
  price: 30000,
};

const product1 = {
  id: "6789",
  brand: "Samsung",
  type: "mobile phone",
  price: 50000,
};

//? .notasyonu ile erişim mümkün
console.log(product.price);
console.log(product.type);

// let proPrice = product.price
// console.log(proPrice)
// proPrice += 5000
// console.log(proPrice)
// console.log(product.price)

//? square bracket
console.log(product["id"]);

//? DESTRUCTURING yöntemi
//?DEğişken isimleri objedeki keylerle aynı olmalıdır

let { id, brand, type, price } = product;

console.log("ID", id);
console.log("brand", brand);
console.log("price", price);
price += 5000;
console.log(price);
console.log(product.price);

let { id: proID, brand: ProBrand, type: proType, price: proPrice } = product1;
console.log(proID, proPrice, proType, ProBrand);
proPrice += 300;
console.log(proPrice);

//? NESTED DESTR
const insanlar = {
  kisi1: {
    kimlikNo: "1234567890",
    adi: "Ahmet",
    soyadi: "Can",
    meslek: "Mimar",
    maas: 30000,
  },
  kisi2: {
    kimlikNo: "44234567890",
    adi: "Canan",
    soyadi: "Can",
    meslek: "Sosyal Gelişim Uzmanı",
    maas: 25000,
  },
};

//   Level 1 Destr
// const { kisi1, kisi2 } = insanlar;
// console.log(kisi1.meslek, kisi2.meslek);
//   Level 2 Destr
// const { adi, meslek } = kisi1;
// console.log(adi);
// let { adi: kisi2Ad, maas } = kisi2;
// console.log(kisi2Ad);

//?iki seviyeli destr

const {
  kisi1: { adi, soyadi, meslek },
  kisi2: { adi: kisi2Ad, soyadi: kisi2Soyad, meslek: kisi2Meslek },
} = insanlar;

console.log(kisi2Soyad);
console.log(meslek);

//* Example
const team = [
  {
    name: "Josh",
    surname: "Barry",
    job: "developer",
    age: 30,
  },
  {
    name: "John",
    surname: "Barry",
    job: "tester",
    age: 45,
  },
  {
    name: "Hazel",
    surname: "Nut",
    job: "team lead",
    age: 40,
  },
];

console.log("******************************");
team.forEach((person) => {
  console.log("Name", person.name);
  console.log("Surname", person.surname);
  console.log("Job", person.job);
  console.log("age", person.age);
});

console.log("******************************");

team.forEach((person) => {
  const { name, surname, job, age } = person;
  console.log("Name", name);
  console.log("Surname", surname);
  console.log("Job", job);
  console.log("age", age);
});
console.log("******************************");

team.forEach(({ name, surname, job, age }) => {
  console.log("Name", name);
  console.log("Surname", surname);
  console.log("Job", job);
  console.log("age", age);
});

//!----  FUNCTIONLARDA DESTRUC. KULLANIMI ----

const objGoster = function () {
  return {
    name: "Hazel",
    surname: "Nut",
    job: "team lead",
    age: 40,
  };
};

console.log(objGoster());
let { name, surnamei, job, age } = objGoster();
console.log("Age func",++age);

//?Fonksiyon Parametresi
console.log("******************")

const veri = {
    id:"123",
    desc:"This is top secret information",
    createdTime:"1980"
}

const printData = (data) => {
    console.log(`${data.id} -${data.desc} - ${data.createdTime}`)
}
const printDataDestr = (data) => {
    const {id, desc, createdTime} = data
    console.log(`${id} -${desc} - ${createdTime}`)
}


printData(veri)
printDataDestr(veri)

//* =============================================
//*  DESTRUCTURING (ARRAY)
//* =============================================

//* ==============================================
//*  REST (...)
//* =============================================

//* =============================================
//*  SPREAD (...)
//* =============================================Şß
