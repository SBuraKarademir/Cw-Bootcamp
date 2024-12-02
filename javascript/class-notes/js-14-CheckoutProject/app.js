/* -------------------------------------------------------------------------- */
/*                                CHECKOUT PAGE                               */
/* -------------------------------------------------------------------------- */
// 1-ürünlerin ekranda görüntülenmesi
// 2-toplam değerleri tablosunun doldurulması
// 3-silme işleme (remove)
// 4-ürün ekleme ve çıkarma

//! 1-ürünlerin ekranda görüntülenmesi

//Ürünlerim
let sepettekiler = [
  { name: "Vintage Backpack", price: 34.99, piece: 1, img: "./img/photo1.png" },
  { name: "Levi Shoes", price: 40.99, piece: 1, img: "./img/photo2.png" },
  { name: "Antique Clock", price: 69.99, piece: 1, img: "./img/photo3.jpg" },
  { name: "Antique", price: 69.99, piece: 1, img: "./img/photo1.jpeg" },
  { name: " Clock", price: 69.99, piece: 1, img: "./img/photo2.jpeg" },
];

sepettekiler.forEach(({img,name,price,piece}) => {

    //1.yol urun.name, urun.img gibi bir yapı kullanmak
    //2-    urun.name kullanmak yerine doğrudan name,img kullanmakiçin => destructure
    // const {img,name,price,piece}=urun
    //2.yol foreach bölümündeki parantez içinde destructure


  document.querySelector("#product-rowlari").innerHTML += `



    <div class="row ">
            <div class="col-md-7">
              <img
                src=${img}
                class="w-100 rounded-start"
                alt="..."
              />
            </div>

            <div class="col-md-7">
              <div class="card-body">
                <h5 class="card-title">${name}</h5>

                <div class="ürün-price">
                  <p class="text-warning h2">$<span class="indirim-price">${price}</span>
                    <span class="h5 text-dark text-decoration-line-through">${(price*0.3).toFixed(2)}</span>
                  </p>
                </div>

                <div
                  class="border border-1 border-dark shadow-lg d-flex justify-content-center p-2">
                  <div class="adet-controller">
                    <button class="btn btn-secondary btn-sm minus">
                      <i class="fas fa-minus"></i>
                    </button>
                    <p class="d-inline mx-4" id="ürün-adet">${piece}</p>
                    <button class="btn btn-secondary btn-sm plus">
                      <i class="fas fa-plus"></i>
                    </button>
                  </div>
                </div>

                <div class="ürün-removal mt-4">
                  <button class="btn btn-danger btn-sm w-100 remove-product">
                    <i class="fa-solid fa-trash-can me-2"></i>Remove
                  </button>
                </div>

                <div class="mt-2">
                  <span class="product-total"> ürün toplam </span>
                </div>
              </div>
            </div>
          </div> 
    
    
    
    `;
});
