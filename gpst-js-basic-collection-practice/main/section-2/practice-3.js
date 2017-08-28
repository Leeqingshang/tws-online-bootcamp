'use strict';

function push(arr,key,len){
    let i = 0;
    while(i < len){
        arr.push(key);
        i++;
    }
    return arr;
}

function extendArr(collection){
    let result = [];
    collection.forEach(x => {
        if(/[\[\:-]+/g.exec(x)){
            let key = x.substr(0,1);
            let len = /\d+/g.exec(x)[0];
            push(result,key,len);
        }else{
            result.push(x);
        }
    });
    return result;
}

function find(collection, ch) {
    let result = null;
    collection.forEach(x => {
        if(x.name === ch){
            result = x;
        }
    });
    return result;
}

function summarise(collection){
    let result = [];
    collection.forEach(x => {
        let obj = find(result,x);
        if(obj){
           obj.summary++;
        }else{
           result.push({name:x,summary:1});
        }
    })
    return result;
}

module.exports = function countSameElements(collection) {
     let newArr = extendArr(collection);
     return summarise(newArr);
}