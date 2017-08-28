'use strict';

function hybrid_operation_to_uneven(collection) {
	let newArr = collection.filter((x) => x%2 !== 0);
	let result = newArr.map((x) => x * 3 + 2);
	return result;
}

module.exports = hybrid_operation_to_uneven;

