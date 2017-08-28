'use strict';

let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

function getMiddleNumber(collection){
  let len = collection.length;
  let number = 0;
  if(len%2 === 0){
     let count = collection[len/2] + collection[len/2 - 1];
     number = Math.ceil(count/2); 
  }else{
  	 let index = Math.ceil(len/2);
     number = collection[index];
  }
  return number;
}

function getChar(number){
  let result = '';	
  if(number > 26){
     let index1 = number%26 === 0?Math.floor(number/26) - 2:Math.floor(number/26) - 1;
     let index2 = number%26 === 0?25:number%26 - 1;
     result = alphabet[index1] + alphabet[index2];
  }else{
     result = alphabet[number - 1];   
  }
  return result;
}

function median_to_letter(collection) {
  let number = getMiddleNumber(collection);
  let result = getChar(number);
  return result;
}

module.exports = median_to_letter;
