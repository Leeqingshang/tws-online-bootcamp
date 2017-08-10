'use strict';

function selfAdd(number_a,number_b){
	let result = [];
	for(let i = number_a;i <= number_b;i++){
		result.push(i);
	}
  	return result;
}

function selfMinus(number_a,number_b){
	let result = [];
	for(let i = number_b;i <= number_a;number_a--){
  		result.push(number_a);
  	}
  	return result;
}
function get_integer_interval(number_a, number_b) {
  
  let result = [];
  if(number_a > number_b){
  	  result = selfMinus(number_a,number_b);
  } 
  if(number_a < number_b){
  	  result = selfAdd(number_a,number_b);
  }
  if(number_a === number_b){
  	  result = [number_a];
  }
  return result;
}

module.exports = get_integer_interval;

