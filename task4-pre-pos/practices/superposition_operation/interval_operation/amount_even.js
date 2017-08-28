'use strict';

function amount_even(collection) {
    let result = 0;
    collection.forEach((x) => {
    	if(x%2 === 0){
    		result +=x;
    	}
    });
    return result;
}

module.exports = amount_even;
