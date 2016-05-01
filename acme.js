"use strict";
let row1 = document.getElementById("row1");
let iAmAPromise = getCategories();

function getCategories() {    
  return new Promise((resolve, reject) => {
    // Create an XHR to load categories
  	let categLoader = new XMLHttpRequest();  	
  	// Listen for when the load event is broadcast  	
  	categLoader.addEventListener("load", function() {
  		let categList = JSON.parse(this.responseText).categories;
   		resolve(categList);
      });
  	categLoader.addEventListener("error", function(){
  		reject();
  	});
  	categLoader.open("GET", "categories.json");	
  	categLoader.send();
    });
};

let amAPromise = getTypes();

function getTypes(){
      return new Promise((resolve, reject) => {
          let typesLoader = new XMLHttpRequest();
          typesLoader.addEventListener("load", function() {
              let typesList = JSON.parse(this.responseText).types;
              resolve (typesList);
          });
          typesLoader.addEventListener("error", function(){    
            reject();
            });
          typesLoader.open("GET","types.json");
          typesLoader.send();
      });
};

let aPromise = getProducts();

function getProducts(){
      return new Promise((resolve, reject) => {
          let productsLoader = new XMLHttpRequest();
          productsLoader.addEventListener("load", function() {
              let productsList = JSON.parse(this.responseText).products;
              // console.log("productsList", productsList);
              buildCard(productsList);
              resolve (productsList);
          });

          productsLoader.addEventListener("error", function(){    
            reject();
            });
          productsLoader.open("GET","products.json");
          productsLoader.send();
     
    });
};

iAmAPromise.then(function(value1){
    // console.log("value", value1);
    });

  amAPromise.then(function(value2){
    // console.log("value", value2);
    });
    aPromise.then(function(value3){
      // console.log("value", value3);
    });

//print to the DOM//
function buildCard(products) {
  for (let i = 0; i < products.length; i++) {
    console.log("1 product", products[i]);
    row1.innerHTML += `<div><section id="id${i}" class="col-xs-4 border card ${products[i].id}"><p>${products[i].type}</p>
      <p>${products[i].name}</p><p>${products[i].description}</p></section></div>`; 
  };
};
//I need to access the products array; wondering if I need to set up an iife.
// tried ${aPromise.productsList[i].id}" did not work
//products[i] did not work  all DOM output shows undefined
//productsList[i] did not work 
//getProducts.productsList[i]  Cannot read property of 0 undefined.

