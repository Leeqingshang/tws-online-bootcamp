'use strict';

function choose_no_common_elements(collection_a, collection_b) {
  return collection_a.filter((x) => {
  	     return !(collection_b.includes(x)); 
  }); 
}

module.exports = choose_no_common_elements;
