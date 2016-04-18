"use strict";
console.log("log something");
var getCategories = function getCategories() {	
	console.log("something1");
  return new Promise((resolve, reject) => {
  	console.log("something2");
  	var categLoader = new XMLHttpRequest();
  	// Create an XHR to load categories
  	// Listen for when the load event is broadcast
    // and execute an anonymous callback	  	
  	categLoader.addEventListener("load", function() {
  		var categList = JSON.parse(this.responseText).categories;
  		console.log("categList", categList); 
   		resolve(categList);
  });
  	categLoader.addEventListener("error", function(){
  		reject();
  	});
  	categLoader.open("GET", "categories.json");	
  	categLoader.send();
});
}
// var iAmAPromise = getCategories();
// console.log("iAmAPromise", iAmAPromise); // You will see a promise definition in the cons









// var promiseCount = 0;

// function testPromise() {
//     var thisPromiseCount = ++promiseCount;

//     var log = document.getElementById('log');
//     log.insertAdjacentHTML('beforeend', thisPromiseCount +
//         ') Started (<small>Sync code started</small>)<br/>');

//     // We make a new promise: we promise a numeric count of this promise, starting from 1 (after waiting 3s)
//     var p1 = new Promise(
//         // The resolver function is called with the ability to resolve or
//         // reject the promise
//         function(resolve, reject) {
//             log.insertAdjacentHTML('beforeend', thisPromiseCount +
//                 ') Promise started (<small>Async code started</small>)<br/>');
//             // This is only an example to create asynchronism
//             window.setTimeout(
//                 function() {
//                     // We fulfill the promise !
//                     resolve(thisPromiseCount);
//                 }, Math.random() * 2000 + 1000);
//         });

//     // We define what to do when the promise is resolved/fulfilled with the then() call,
//     // and the catch() method defines what to do if the promise is rejected.
//     p1.then(
//         // Log the fulfillment value
//         function(val) {
//             log.insertAdjacentHTML('beforeend', val +
//                 ') Promise fulfilled (<small>Async code terminated</small>)<br/>');
//         })
//     .catch(
//         // Log the rejection reason
//         function(reason) {
//             console.log('Handle rejected promise ('+reason+') here.');
//         });

//     log.insertAdjacentHTML('beforeend', thisPromiseCount +
//         ') Promise made (<small>Sync code terminated</small>)<br/>');
// }