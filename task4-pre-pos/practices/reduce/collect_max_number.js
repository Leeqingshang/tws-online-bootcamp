'use strict';

function collect_max_number(collection) {
  return collection.sort()[collection.length - 1];
}

module.exports = collect_max_number;
