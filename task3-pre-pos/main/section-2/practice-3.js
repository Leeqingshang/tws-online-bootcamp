'use strict';


function split(item){
   let result=[];
   if(/[\:\[\]-]/.exec(item)[0]!==null){
      result={key:item.slice(0,1),count:parseInt(/[\d]+/.exec(item)[0])};
   }
   return result;
}

function push(arr,key,count){
   let result=[];
   for(let i=0;i<count;i++){
   	  arr.push(key); 
   }    
}

function extendArray(collection){
   let result=new Array();
   
   for(let item of collection){
   	  if(item.length===1){
   	  	 result.push(item);
   	  }else{
   	  	 let  splitArray=split(item);
   	  	 push(result,splitArray.key,splitArray.count);
   	  }
   }
 
   return result;
}


function includes(result,obj){
   for(let item of result){
       if(item.name===obj){
       	  return item;
       }
   }

   return null;
}

function summarize(arr){
   let result=[];
   for(let item of arr){
   	  let obj=includes(result,item);
   	  if(obj){
   	  	obj.summary++;
   	  }else{
   	  	result.push({name:item,summary:1});
   	  }
   }

   return result; 
}

module.exports = function countSameElements(collection) {
			    /*let array=extendArray(collection);
                
			    return summarize(array);*/

             let result=[];
             for(let i=0;i<collection.length;i++){
                let temp=collection[i];
                let count=0;
                for(let j=0;j<collection.length;j++){
                  if(temp==collection[j]){
                     count++;
                     collection[j]=-1;
                  }
                }
                if(temp==-1){continue;}

                //处理特殊数据
                if(temp.length>-1){

                  let key=temp.slice(0,1);
              
                  if(temp.includes('[')){
                     count=parseInt(temp.slice(2,temp.length-1));
                  }
                  if(temp.includes(':') || temp.includes('-')  ){            
                     count=parseInt(temp.slice(2));
                  }
                  
                  result.push({key:key,count:count});
                }else{
                
                 //正常数据
                  result.push({key:temp,count:count});
                }
              
                
             }

             console.log(result);
}
