'use strict';
function includes(arr,ch){
   for(let item of arr){
   	   if(item.key===ch){
   	   	  return item;
   	   }
   }
   return null; 
}

function split(item){
   let array=item.split('-');
   return {key:array[0],count:parseInt(array[1])}; 
}

function push(arr,key,count){
	for(let i=0;i<count;i++){
         arr.push(key); 
	}
}


function extendCh(collection){
	let result=new Array();
	for(let item of collection){
		if(item.length>1){
			let jdata=split(item);
			push(result,jdata.key,jdata.count); 
		}else{
			result.push(item);
		}
	}

	return result;
}

function summarize(collection){
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
module.exports = function countSameElements(collection) {

               let extendArray=extendCh(collection);
               return summarize(extendArray);  

}