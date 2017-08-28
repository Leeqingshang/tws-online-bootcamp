
function includes(arr,x){
	for(let item of arr){
		if(item.key === x){
			return true;
		}
	}
	return false;
}

function getCollectionC(collection){
    let result = [];
    collection.forEach((x) => {
        let count = 0;
        for(let item of collection){
        	if(x === item){
        		count++;
        	}
        }
        if(!includes(result,x)){
        	result.push({key:x,count:count});
        }
    });
    return result; 
}

function getResult(collection,obj){
    collection.forEach((x) => {
         if(obj.value.includes(x.key)){
         	x.count -= Math.floor(x.count/3);
         }
    });
    return collection;
}
function create_updated_collection(collection_a, object_b) {
    let newArr = getCollectionC(collection_a);
    return getResult(newArr,object_b);
}

module.exports = create_updated_collection;
