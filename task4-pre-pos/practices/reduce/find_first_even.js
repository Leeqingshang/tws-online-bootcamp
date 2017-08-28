'use strict';

function find_first_even(collection) {
  return collection.find((x) => {
         return x%2 === 0;
  });
}

module.exports = find_first_even;

