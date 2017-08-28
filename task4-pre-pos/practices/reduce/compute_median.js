'use strict';

function getNumber(arr){
  let result = 0;	
  let len = arr.length;
  if(len%2 === 0){
      result =  (parseFloat(arr[len/2]) + parseFloat(arr[len/2 - 1]))/2;     
  }else{
      result = parseFloat(arr[Math.ceil(len/2)]);
  }
  return result;
}

function compute_median(collection) {
  let result = 0;
  let arr = collection;
  arr.sort((x,y) => {
      return y - x;
  });
  result = getNumber(arr);
  return result;
}


module.exports = compute_median;


