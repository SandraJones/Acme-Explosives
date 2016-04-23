"use strict";
let row = document.getElementById("row");
var iAmAPromise = getCategories();
function getCategories() {    
  return new Promise((resolve, reject) => {
    // Create an XHR to load categories
  	var categLoader = new XMLHttpRequest();  	
  	// Listen for when the load event is broadcast  	
  	categLoader.addEventListener("load", function() {
  		var categList = JSON.parse(this.responseText).categories;
   		resolve(categList);
  });
  	categLoader.addEventListener("error", function(){
  		reject();
  	});
  	categLoader.open("GET", "categories.json");	
  	categLoader.send();
});
};
var amAPromise = getTypes();
function getTypes(){
      return new Promise((resolve, reject) => {
          var typesLoader = new XMLHttpRequest();
          typesLoader.addEventListener("load", function() {
              var typesList = JSON.parse(this.responseText).types;
              resolve (typesList);
          });
          typesLoader.addEventListener("error", function(){    
            reject();
            });
          typesLoader.open("GET","types.json");
          typesLoader.send();
      });
};
var aPromise = getProducts();
function getProducts(){
      return new Promise((resolve, reject) => {
          var productsLoader = new XMLHttpRequest();
          productsLoader.addEventListener("load", function() {
              var productsList = JSON.parse(this.responseText).products;
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
    console.log("value", value1);
    });

  amAPromise.then(function(value2){
    console.log("value", value2);
    });
    aPromise.then(function(value3){
      console.log("value", value3);
    });

//print to the DOM//
function buildCard(products) {
  for (var i = 0; i < products.length; i++) {
  row.innerHTML += `<div class="row">${products[i].name.value}</div><div>${products[i].categories.value}/div>`; 
  };
};
buildCard();