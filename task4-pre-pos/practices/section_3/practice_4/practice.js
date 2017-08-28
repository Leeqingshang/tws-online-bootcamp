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

function push(arr,number,key){
	for(let i = 0;i < number;i++){
		arr.push(key);
	}
}

function extendArr(collection){
    let result = [];
    for(let item of collection){
    	if(/-/.exec(item) != null){
    		let key = item.slice(0,1);
    		let count = parseInt(/\d+/g.exec(item)[0]);
    		push(result,count,key);
    	}else{
    		result.push(item);
    	}
    } 
    return result;   
}

function create_updated_collection(collection_a, object_b) {
	let newArr = extendArr(collection_a);
    let objArr = getCollectionC(newArr);
    return getResult(objArr,object_b);
}

module.exports = create_updated_collection;
