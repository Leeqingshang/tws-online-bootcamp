'use strict';

let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

function getChar(x){
        let key = '';
        if(x%26 === 0){
        	key = alphabet[Math.floor(x/26) - 1] + alphabet[25];
        }else{
            key = alphabet[Math.floor(x/26) - 1] + alphabet[(x%26) - 1];
        }
        return key;
}

var number_map_to_word = function(collection){
  return collection.map((x) => {
  	let key = '';
  	if(x > 26){
  		key = getChar(x);
  	}else{
  		key = alphabet[x -1];
  	}
  	return key;
  });
};

module.exports = number_map_to_word;
