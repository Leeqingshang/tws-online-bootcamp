'use strict';

function hybrid_operation(collection) {
   let newArr = collection.map((x) => x * 3 + 2);
   let result = newArr.reduce((x,y) => x + y);
   return result;
}

module.exports = hybrid_operation;

