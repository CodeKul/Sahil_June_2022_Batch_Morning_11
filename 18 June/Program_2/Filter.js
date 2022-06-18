// How to fix "cannot use import statement outside a module"
// https://flaviocopes.com/fix-cannot-use-import-outside-module/

//Meaning of import statement
//https://v8.dev/features/import-assertions


import productJson from './products.json' assert {type: 'json'};

let productArray = productJson.products;

console.log(productArray);

const diaryProducts = productArray.filter(giveDiaryProducts);

function giveDiaryProducts(singleProduct) {

  return singleProduct.type === "dairy";

}

console.log(diaryProducts);

