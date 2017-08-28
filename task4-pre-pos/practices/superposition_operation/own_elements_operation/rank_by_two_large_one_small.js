'use strict';
function rank_by_two_large_one_small(collection){
   let arr = collection.sort((x,y) => x - y);
   for(let i = 0;i < collection.length;i++){
   	  if(i%3 === 2){
   	  	 let key = collection[i - 2];
         arr.splice(i - 2,1);
         arr.splice(i,0,key);
   	  }
   }
   return arr;
}
module.exports = rank_by_two_large_one_small;
