'use strict';

function includes(arr,ch){
  for(let item of arr){
      if(item===ch){
        return true;
      }
  }
  return false;
}

module.exports = function collectSameElements(collectionA, collectionB) {
 
  let result=new Array();
    for(let item of collectionA){
      if(includes(collectionB[0],item)){
        result.push(item);
      }
    }

    return result;
}