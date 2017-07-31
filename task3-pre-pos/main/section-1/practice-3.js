'use strict';

module.exports = function collectSameElements(collectionA, objectB) {

  let result=new Array();
  let j=0;
  collectionA.forEach((itemA,index,array)=>{
      for(const itemB of objectB.value){
	      if(itemB==itemA){
		     result[j]=itemA;
			 j++;
		  }
	  }            
  });
  return result;
}
