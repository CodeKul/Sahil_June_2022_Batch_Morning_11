// How to fix "cannot use import statement outside a module"
// https://flaviocopes.com/fix-cannot-use-import-outside-module/

//Meaning of import statement
//https://v8.dev/features/import-assertions

import productJson from './products.json' assert {type: 'json'};

let productArray = productJson.products;
console.log(productJson);

console.log(productArray);

let productTitlesArray = productArray.map(printProductTitle);

function printProductTitle(singleProduct) {

  // console.log(singleProduct);

  return singleProduct.title;

}

console.log(productTitlesArray);