"use strict";
let headEl = document.querySelector('h1');
console.log(headEl);
console.log(headEl?.innerText);
let aEl = document.querySelector('a'); //HTMLAnchorElement->bcz accessing via tag name so had idea that it is anchor tag
console.log(aEl);
console.log(aEl?.href);
//Element->bcz accessing via class name so it can be any tag, thats why mentioning type become imp here in class way of accessing
let elClass = document.querySelector('.anchor');
console.log(elClass);
console.log(elClass?.href);
let paraEl = document.querySelector('#para');
console.log(paraEl);
console.log(paraEl?.innerHTML);
