'use strict';
var is_exist_element = function(collection,element){
    let newArr = collection.filter((x,index) => index%2 === 0);
    return newArr.includes(element); 
};
module.exports = is_exist_element;
