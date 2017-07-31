'use strict';

module.exports = function countSameElements(collection) {
 
			            let result=new Array();						
						let ilen=collection.length;
						//双循环统计相同元素
						if(ilen>0){
						   for(let i=0;i<ilen;i++){
						    let temp=collection[i];
                            let count=0;
                            for(let j=0;j<ilen;j++){
								  if(collection[j]==temp){
								     count++;
									 collection[j]=-1;
								  }
							}
							if(temp==-1){continue};
						    result.push({key:temp,count:count}); 							
						    }
						};
											
					  return result;
               
}
