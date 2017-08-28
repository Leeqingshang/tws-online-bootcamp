'use strict';

function choose_divisible_integer(collection_a, collection_b) {
	return collection_a.filter((x) => {
           return collection_b.find(function(item){
                    return x%item === 0;
            });
	});
}

module.exports = choose_divisible_integer;
