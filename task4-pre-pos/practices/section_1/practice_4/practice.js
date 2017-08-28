function collect_same_elements(collection_a, object_b) {
  let result = [];
  collection_a.forEach((x) => {
     	if(object_b['value'].includes(x['key'])){
     		result.push(x['key']);
     	};
   });
   return result;
}

module.exports = collect_same_elements;
