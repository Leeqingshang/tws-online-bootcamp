function collect_same_elements(collection_a, object_b) {
  return collection_a.filter((x) => {
     	return object_b['value'].includes(x);
     });
}

module.exports = collect_same_elements;
