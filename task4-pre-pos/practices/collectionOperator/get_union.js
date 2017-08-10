'use strict';

function get_union(collection_a, collection_b) {
  collection_b.forEach((x)=>{
  	if(!collection_a.includes(x)){
        collection_a.push(x);
  	}
  });	
  return collection_a;
}

module.exports = get_union;

