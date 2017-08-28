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

module.exports = function createUpdatedCollection(collectionA, objectB) {
  let newArr = summarise(collectionA);
  return newArr.map(x => {
       if(objectB.value.includes(x.key)){
            x.count -= Math.floor(x.count/3);
       }
       return x;
   })
}
