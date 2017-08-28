'use strict';

function average_uneven(collection) {
  let count = 0;
  let number = 0;
  collection.forEach(x => {
  	if(x%2 !== 0){
  		count += x;
  		number++;
  	}
  });
  return count/number;
}

module.exports = average_uneven;
