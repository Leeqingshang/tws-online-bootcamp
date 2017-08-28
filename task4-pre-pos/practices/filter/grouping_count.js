'use strict';

function grouping_count(collection) {
  let result = new Object();

  for(let i = 0;i < collection.length;i++){
  	let temp = collection[i];
  	let count = 0;
  	for(let j = 0;j < collection.length;j++){
  		if(temp === collection[j]){
  			count ++;
  			collection[j] = -1;
  		}
  	}
  	if(temp == -1){continue;}
    result[temp] = count;
  }
  
  return result;
}

module.exports = grouping_count;
