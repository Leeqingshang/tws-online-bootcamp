'use strict';


module.exports = function countSameElements(collection) {
 
			            let result=new Array();
					    let newResult=new Array(); 
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
							if(/[\[\]\:-]+/g.exec(temp)!=null){ 
								let key=temp.slice(0,1);
								let count=parseInt(/[\d]+/.exec(temp)[0]);
                                result.push({key:key,count:count});
							}else{
								result.push({key:temp,count:count});
							}							
						  }
						};
						 
						//去重统计
						for(let i=0;i<result.length;i++){
							//新集合第一项推入
                            if(i==0){
                            	newResult.push({name:result[i].key,summary:result[i].count});
                            	i+=1;
                            }
                            if(result[i].key==newResult[newResult.length-1].name){
                               newResult[newResult.length-1].summary+=result[i].count;
                            }else{
                               newResult.push({name:result[i].key,summary:result[i].count});	
                            }   
						} 

					  return newResult;
               
}
