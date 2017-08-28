function collect_same_elements(collection_a, collection_b) {
	return collection_a.filter((x) => {
     	return collection_b[0].includes(x);
     });

}

module.exports = collect_same_elements;
