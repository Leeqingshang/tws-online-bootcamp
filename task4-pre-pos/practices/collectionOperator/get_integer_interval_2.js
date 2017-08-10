'use strict';

function selfAdd(number_a,number_b){
  let result = [];
  for(let i=number_a;i <= number_b;i++){
      if(i%2){continue}
      result.push(i);  
  } 
  return result;
}

function selfMinus(number_a,number_b){
  let result = [];
  for(let i = number_a;i >= number_b;i--){
      if(i%2){continue;}
      result.push(i);
    }
    return result;
}
function get_integer_interval_2(number_a, number_b) {
  
  let result = [];
  if(number_a > number_b){
      result = selfMinus(number_a,number_b);
  } 
  if(number_a < number_b){
      result = selfAdd(number_a,number_b);
  }
  if(number_a === number_b && !(number_a%2)){
      result = [number_a];
  }
  return result;
}

module.exports = get_integer_interval_2;