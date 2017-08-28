'use strict';

let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

function even_to_letter(collection) {
   let result = [];
   collection.forEach((x) => {
       if(x%2 === 0){
       	  result.push(alphabet[x - 1]);
       }
   }) 
   return result; 
}

module.exports = even_to_letter;
