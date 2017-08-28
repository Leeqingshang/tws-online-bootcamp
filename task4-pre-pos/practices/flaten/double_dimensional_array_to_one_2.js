'use strict';

let result = [];
function double_to_one(collection) {   
   let result = [];

   let newCollection = double_to_two(collection);
   for(let item of newCollection){
   	   if(!result.includes(item)){
   	   	   result.push(item);
   	   }
   }
   return result;
}

function double_to_two(collection) {   
   for(let item of collection){
   	   if(Array.isArray(item)){
   	   	  double_to_two(item);
   	   }else{
   	   	  result.push(item);
   	   }
   }
   return result;
}

module.exports = double_to_one;
