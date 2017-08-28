'use strict';

function getEvenNumber(collection){
    return collection.filter(x => x%2 === 0);
}
var calculate_median = function(collection){
    let evenNumber = getEvenNumber(collection);
    let len = evenNumber.length;
    let result = 0;
   
    if(len%2 === 0){
       result = (evenNumber[len/2] + evenNumber[len/2 - 1])/2;    
    }else{
       result = evenNumber[Math.floor(len/2)];
    }

    return result;
};
module.exports = calculate_median;
