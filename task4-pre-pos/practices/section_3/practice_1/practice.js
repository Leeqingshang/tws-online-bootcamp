function create_updated_collection(collection_a, object_b) {
  for(let item of collection_a){
  	 if(object_b.value.includes(item.key)){
  	 	  item.count--;
  	 }
  }
  return collection_a;
}

module.exports = create_updated_collection;
