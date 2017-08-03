'use strict';
function includes(arr,ch){
   for(let item of arr){
   	   if(item.key===ch){
   	   	  return item;
   	   }
   }
   return null; 
}


module.exports = function countSameElements(collection) {
               let result=new Array();
               for(let item of collection){
               	   let obj=includes(result,item)
               	   if(obj){
               	   	   obj.count++;
               	   }else{
               	   	   result.push({key:item,count:1});
               	   }
               }

               return result;               
}
