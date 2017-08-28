'use strict';
function getEvenNumberArr(collection){
	collection.sort((x,y) => y - x);
    let result = [[],[],[]];    
    for(let i = 0;i < collection.length;i++){
    	let temp = collection[i];
        let len = temp.toString().length; 
        if(len === 1){
        	result[0].push(temp);
        }
        if(len === 2){
        	result[1].push(temp);
        }
        if(len === 3){
        	result[2].push(temp);
        }
    }
    return result;
}

function getEventIndexArr(collection){
	return collection.filter((x,index) => index%2 != 0 && x%2 === 0);
}

function getAverage(collection){
	let result = [];
    for(let item of collection){
    	if(item.length === 0){continue}
         let count = item.reduce((x,y) => x + y);		
         result.push(count/item.length);
    }
    return result;
}
var even_group_calculate_average = function(collection){
	let evenIndexArr = getEventIndexArr(collection);
	if(evenIndexArr.length === 0){return [0]};
    let newArr = getEvenNumberArr(evenIndexArr);
    let result = getAverage(newArr);
    return result;
};
module.exports = even_group_calculate_average;
