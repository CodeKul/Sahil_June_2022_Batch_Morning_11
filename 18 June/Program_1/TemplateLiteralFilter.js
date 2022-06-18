import productJson from './products.json' assert {type: 'json'};

let productArray = productJson.products;

console.log(productJson);

console.log(productArray);

let diaryProductCards = document.getElementById("diaryProductCards");

let dairyProductBtn = document.getElementById("dairyProductBtn");

const diaryProducts = productArray.filter(giveDiaryProducts);

function giveDiaryProducts(singleProduct) {

  return singleProduct.type === "dairy";

}

console.log(diaryProducts);

dairyProductBtn.addEventListener('click', displayDiaryCards);

function displayDiaryCards() {

  let cardsDisplayStr = "";

  for (let j = 0; j < diaryProducts.length; j++) {

    cardsDisplayStr = cardsDisplayStr +
      `<div class="card" style="width: 18rem;">
                      <img src="./productImage.jpg" class="card-img-top" alt="...">
                      <div class="card-body">
                        <h5 class="card-title">${diaryProducts[j].title}</h5>
                        <p class="card-text">
                    ${diaryProducts[j].description}
                    </p >

                        <p class="card-text">
                    Price : ${diaryProducts[j].price}
                    </p >

                        <p class="card-text">
                    Rating : ${diaryProducts[j].rating}
                    </p >

                        <p class="card-text">
                    Type : ${diaryProducts[j].type}
                    </p >

                        <a href="#" class="btn btn-primary">Go somewhere</a>
                        
                      </div>
                    </div>`;

  }

  diaryProductCards.innerHTML = cardsDisplayStr;

}


