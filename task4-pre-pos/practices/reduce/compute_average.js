'use strict';

function compute_average(collection) {
  let result = 0;
  let count = collection.reduce((x,y) => {
  	  return x + y;
  });
  let number = collection.length;
  result = count/number;
  return result;
}

module.exports = compute_average;

