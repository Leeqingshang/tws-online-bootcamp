'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  if(collectionA.length==0 || objectB.length==0){return false;}

  //获取相同元素集合collectionC;
  let collectionC=new Array();
  for(let i=0;i<collectionA.length;i++){
     let temp=collectionA[i];
     let count=0;
  	for(let j=0;j<collectionA.length;j++){
        if(collectionA[j]==temp){
        	count++;
        	collectionA[j]=-1;
        }
  	}
  	if(temp==-1){continue}

    if(/[-]+/.exec(temp)!=null){
    	let count=parseInt(/[\d]+/.exec(temp)[0]);
        collectionC.push({key:temp.slice(0,1),count:count}); 	
    }else{
    	collectionC.push({key:temp,count:count}); 	
    } 		
  	
  }

 //条件处理
 for(let s=0;s<collectionC.length;s++){
 	let temp=collectionC[s];
 	let arr=objectB.value;
 	if(arr.indexOf(temp.key)!=-1){
        temp.count=temp.count-parseInt(temp.count/3); 
 	}
 }

 return collectionC;
}
