'use strict';
var calculate_average = function(collection){
    let count =0;
    let number = 0;
    collection.forEach((x,index) => {
    	if(index%2 !== 0){
    		count += x;
    		number++;
    	}
    });
    return count/number;
};
module.exports = calculate_average;
