'use strict';
var even_asc_odd_desc = function(collection){
let eventArr = [];
let oddArr = [];
collection.forEach(x => {
	if(x%2 === 0){
		eventArr.push(x);
	}else{
		oddArr.push(x);
	}
});
eventArr.sort((x,y) => x - y);
oddArr.sort((x,y) => y - x);
return eventArr.concat(oddArr);
};
module.exports = even_asc_odd_desc;
