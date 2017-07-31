'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  let result=new Array();
  let j=0;
  for(const itemA of collectionA){
      objectB.value.forEach((itemB,index,arr)=>{
	     if(itemA.key==itemB){
		     result[j]=itemA.key;
			 j++;
		 }
	  })
  }
  return result;
}
