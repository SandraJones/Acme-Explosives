"use strict";

// $( document ).ready(function(){
//   console.log("document ready");
// });

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
  for (var outerKey in products) {
    console.log(" outerKey", products[outerKey]);
    for (var innerKey in products[outerKey]) {
      console.log("innerKey ", products[outerKey][innerKey].description);
    row1.innerHTML += `<div><section id="id" class="col-xs-4 border card ${products[outerKey][innerKey].id}"><p>${products[outerKey][innerKey].type}</p>
      <p>${products[outerKey][innerKey].name}</p><p>${products[outerKey][innerKey].description}</p></section></div>`; 
    };
  };
};


//for each or for in  grab keys like for    key in products  $id.append in correct syntax

//populate dom and then append to get the dropdowns $#(div).append(`<select etc. for dom printing)

//use jqquery selexctor .each