'use strict';

let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

function average_to_letter(collection) {
   let len = collection.length;	
   let count = collection.reduce((x,y) => x + y);
   let index = Math.ceil(count/len);
   return alphabet[index - 1];
}

module.exports = average_to_letter;

