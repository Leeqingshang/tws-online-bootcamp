'use strict';

function calculate_elements_sum(collection) {
  return collection.reduce((x,y) => {
  	     return x + y;
  });
}

module.exports = calculate_elements_sum;

