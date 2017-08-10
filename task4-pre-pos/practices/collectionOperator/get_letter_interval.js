'use strict';
function selfAdd(charStartCode,len){
	let result = [];
   for(let i = 0;i < len ;i++){
  		let key = String.fromCharCode(charStartCode);
        result.push(key);
        charStartCode++;
  	}
  	return result;  	
}

function selfMinus(charEndCode,len){
	let result = [];
   for(let i = 0;i < len ;i++){
  		let key = String.fromCharCode(charEndCode);
        result.push(key);
        charEndCode--;
  	}
  	return result;  	
}

function get_letter_interval(number_a, number_b) {
  let result = [];
  let charStartCode = 97;
  let charEndCode = 101;
  if(number_a < number_b){
  	  result = selfAdd(charStartCode,number_b);
  }
  if(number_a > number_b){
  	  result = selfMinus(charEndCode,number_a);
  }
  if(number_a === number_b){
  	  result = [String.fromCharCode(charStartCode + number_a - 1)];
  }
  return result;
}

module.exports = get_letter_interval;
