function includes(arr,x){
	for(let item of arr){
		if(item.key === x){
			return true;
		}
	}
	return false;
};

function getSameCount(collection){
  let result = [];
  collection.forEach((x) => {
  	  let count = 0;
  	  for(let item of collection){
          if(item === x){
          	count++
          } ;
  	  }
  	  if(!includes(result,x)){
          result.push({key:x,count:count});  
  	  } 	  
  });
  return result;
}

function count_same_elements(collection) {
  return getSameCount(collection);
}

module.exports = count_same_elements;
