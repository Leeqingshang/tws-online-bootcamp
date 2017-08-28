'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
   return collectionA.map(x => {
       if(objectB.value.includes(x.key)){
            x.count--;
       }
       return x;
   })
}
