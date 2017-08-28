'use strict';

function summarise(collection){
    let result = [];
    collection.forEach(x => {
        let obj = result.find(item => item.key === x);
        if(obj !== undefined){
            obj.count++;
        }else{
            result.push({key:x,count:1});
        }
    })
    return result;
}

function push(result,key,len){
    let i = 0;
    while(i < len){
        result.push(key);
        i++
    }
    return result;
}

function extendArr(collection){
   let result = [];
   collection.forEach(x => {
       if(/[-]+/.exec(x)){
          let key = x.substring(0,1);
          let len = /\d+/g.exec(x)[0];
          push(result,key,len);
       }else{
          result.push(x);
       }
   });
   return result;
}

module.exports = function createUpdatedCollection(collectionA, objectB) {
  let extendAfterArr = extendArr(collectionA);  
  let newArr = summarise(extendAfterArr);
  return newArr.map(x => {
       if(objectB.value.includes(x.key)){
            x.count -= Math.floor(x.count/3);
       }
       return x;
   })
}
