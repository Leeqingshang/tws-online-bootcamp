'use strict';

function find(collection, ch) {
    let result = null;
    collection.forEach(x => {
        if(x.key === ch){
            result = x;
        }
    });
    return result;
}

module.exports = function countSameElements(collection) {
    let result = [];
    collection.forEach(x => {
        let obj = find(result,x);
        if(obj){
           obj.count++;
        }else{
           result.push({key:x,count:1});
        }
    })
    return result;
}
