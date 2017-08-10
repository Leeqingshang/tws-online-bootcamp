'use strict';

let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

function getKey(item){
  let key = 0;
  let index = 0;
  let index2 = 0;
  if(item > 26){
      item%26 === 0 ? index2 = 26 : index2 = item%26;
      item%26 === 0 ? index = Math.floor(item/26) - 2 : index = Math.floor(item/26) -1;
      key = alphabet[index] + alphabet[index2 - 1];
    }else{
      key = alphabet[item - 1];	
    }
  return key;  
}

function selfMinus(numberA,numberB){
  let result = [];
  for(let i = numberA;i >= numberB;i--){
        let key = getKey(i);
     	result.push(key);
     }
  return result;
}

function get_integer_interval_2(numberA, numberB) {
  let result = [];      
  if(numberA > numberB){
      result = selfMinus(numberA,numberB);
  } 
  if(numberB > numberA){
      result = selfMinus(numberB,numberA).reverse(); 
  }
  if(numberA === numberB){
      let key = getKey(numberA);
      result.push(key);
  }

  return result;
}

module.exports = get_integer_interval_2;