'use strict';

function spilt_to_zero(number, interval) {
  let subtraction = number * 10;
  let minuend = interval * 10;	
  let result = [number];	
  while(subtraction > 0){
  	  let key = (subtraction - minuend)/10;
      result.push(key);
      subtraction -= minuend;  
  }
  return result;
}

module.exports = spilt_to_zero;
