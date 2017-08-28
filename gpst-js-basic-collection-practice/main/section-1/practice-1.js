'use strict';

function includes(collection, ch) {
    return collection.some(x => x === ch);
}

module.exports = function collectSameElements(collectionA, collectionB) {
    let result = [];
    collectionA.forEach(x => {
        if(includes(collectionB,x)){
            result.push(x);
        }
    });
    return result;
}
