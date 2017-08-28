function includes(arr,x){
	for(let item of arr){
		if(item.name === x){
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
          result.push({name:x,summary:count});  
  	  } 	  
  });
  return result;
}

function push(arr,number,item){
	for(let i = 0;i < number;i++){
		arr.push(item);
	}
}

function extendArr(collection){
   let result = [];
   for(let item of collection){
   	  if(/[\:\|\[-]+/g.exec(item) != null){
        let number = parseInt(/\d+/.exec(item)[0]);
        let key = item.slice(0,1);
        push(result,number,key);
   	  }else{
   	  	result.push(item);
   	  }
   }
   return result;
}

function count_same_elements(collection) {
  let newArr = extendArr(collection);
  return getSameCount(newArr);
}

module.exports = count_same_elements;
