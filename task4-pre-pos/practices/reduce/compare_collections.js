'use strict';

function compare_collections(collection_a, collection_b) {
  let result = true;
  if(collection_a.length !== collection_b.length){return false;}
  for(let i = 0;i < collection_a.length;i++){
  	  if(collection_a[i] !== collection_b[i]){
  	  	result = false;
  	  }
  }

  return result;
}

module.exports = compare_collections;


