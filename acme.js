"use strict";

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
      return new Promise ((resolve, reject)=> {
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

getCategories().then
    getTypes();
  