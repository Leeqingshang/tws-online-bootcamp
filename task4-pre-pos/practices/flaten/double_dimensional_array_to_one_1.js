'use strict';
let result = [];
function double_to_one(collection) {   
   for(let item of collection){
   	   if(Array.isArray(item)){
   	   	  double_to_one(item);
   	   }else{
   	   	  result.push(item);
   	   }
   }
   return result;
}

module.exports = double_to_one;
