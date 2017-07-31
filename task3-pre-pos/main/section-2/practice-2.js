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
							if(/[-]+/.exec(temp)!=null){ 
								let key=temp.slice(0,1);
								let count=parseInt(/[\d]+/.exec(temp)[0]);
                                result.push({key:key,count:count});
							}else{
								result.push({key:temp,count:count});
							}
                            							
						    }
						};
												
					  return result;
               
}