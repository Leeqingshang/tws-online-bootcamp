'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  if(collectionA.length==0 || objectB.length==0){return false;}
	    for(var i=0;i<collectionA.length;i++){
		    var temp=collectionA[i];
			var arr=objectB.value;
			if(arr.indexOf(temp.key)!=-1){
			    temp.count=temp.count-parseInt(temp.count/3);
			}
		}
		return collectionA;
}
