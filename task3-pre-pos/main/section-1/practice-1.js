'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  if( !(Array.isArray(collectionA)) &&　!(Array.isArray(collectionB))){ 
      return false;
  }
  let result=new Array();
  let j=0;
  collectionA.forEach((itemA,index,array)=>{
      for(const itemB of collectionB){
	      if(itemB==itemA){
		     result[j]=itemA;
			 j++;
		  }
	  }            
  });
  return result;
}
