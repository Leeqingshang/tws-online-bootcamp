'use strict';

function hybrid_operation_to_uneven(collection) {
  let oddArr = collection.filter(x => x%2 !== 0);
  let newArr = oddArr.map(x => x * 3 + 5);
  let result = newArr.reduce((x,y) => x + y);
  return result;
}

module.exports = hybrid_operation_to_uneven;

