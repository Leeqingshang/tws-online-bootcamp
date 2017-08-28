'use strict';
var single_element = function(collection){
    let newArr = collection.filter((x,index) => index%2 != 0);
    let result = newArr.filter(x => newArr.indexOf(x) === newArr.lastIndexOf(x));
    return result;
};
module.exports = single_element;
