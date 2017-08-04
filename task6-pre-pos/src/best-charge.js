'use strict'

function push(arr,key,count){
   for(let i = 0;i < count;i++){
   	   arr.push(key);
   }
}

function extendData(arr){
   let result = [];	
   for(let item of arr){
   	   let itemArray = item.split("x");
   	   let key = itemArray[0].slice(0,itemArray[0].length - 1);
   	   let count = itemArray[1].slice(1);
       push(result,key,count); 
   }
   return result;
}

function includes(arr,ch){
   for(let item of arr){
   	  if(item.id === ch){
   	  	return item;
   	  }
   }
   return null;
}



function getMenu(arr){
	  let result = [];
    let allItems = loadAllItems();
    let inputs = extendData(arr);
    for(let item of inputs){
    	let obj = includes(allItems,item);
        if(obj){
           result.push(obj);
        }   
    }
    
    let menu = [];
    for(let item of result){
       if(menu.indexOf(item) != -1){
          item.amount++;
          item.count = item.amount * item.price;
       }else{
          item.amount = 1;
          item.count = item.amount * item.price;
          menu.push(item);  
       }
    }

    return menu; 
}

function ispf(menu,promotionsFood){
    for(let item of menu){
      if(promotionsFood.items.indexOf(item.id) != -1){
        return true;
      }
    }
    return false;
}

function thirtyMinusSix(menu){
   let totalPrice = 0;
   for(let item of menu){
       totalPrice += item.count;
   }
   let result = {type:"满30减6元",totalPrice:totalPrice,promotions:totalPrice - 6};
   return result;
}

function someHalfPrice(menu,promotionsFood){
   let promotions = 0;
   let totalPrice = 0;
   for(let item of menu){
      if(promotionsFood.items.indexOf(item.id) != -1){
          promotions += (item.price * item.amount)/2; 
      }
      totalPrice += item.count;
   }
   let result = {type:"指定菜品半价",totalPrice:totalPrice,promotions:totalPrice - promotions};
   return result;
}

function promotions(menu,totalPrice){
    let allPromotions = loadPromotions(); 
    let promotionsFood = allPromotions[1];
    
    let tmsmenu = null; 
    if(totalPrice >= 30){
        tmsmenu = thirtyMinusSix(menu);
    }
 
    let shmenu = null;   
    let ispromotions = ispf(menu,promotionsFood);
   
    if(ispromotions){
        shmenu = someHalfPrice(menu,promotionsFood); 
    }
    
    if(shmenu !== null || tmsmenu !== null){
      if(tmsmenu.promotions < shmenu.promotions){
        return tmsmenu;
      }else if (tmsmenu.promotions > shmenu.promotions){
        return shmenu;
      }
    }   
    
    return {type:"没有享受优惠",totalPrice:totalPrice,promotions:0}
}

function viewModel(menu,priceData){
   
   let expectText = `============= 订餐明细 =============\n`;
   for(let item of menu){
       expectText += `${item.name} x ${item.amount} = ${item.count}元\n`;
   }
       expectText += `-----------------------------------\n`   

   switch(priceData.type){
          case '指定菜品半价':
          expectText += `使用优惠:\n`;
          expectText += `指定菜品半价(黄焖鸡，凉皮)，省${priceData.totalPrice - priceData.promotions}元\n`;
          expectText += `-----------------------------------\n`;
          expectText += `总计：${priceData.promotions}元\n`;
          expectText += `===================================`;
          break;
          case '满30减6元':
          expectText += `使用优惠:\n`;
          expectText += `满30减6元，省6元\n`;
          expectText += `-----------------------------------\n`;
          expectText += `总计：${priceData.promotions}元\n`;
          expectText += `===================================`;
          break;
          case '没有享受优惠':
          expectText += `总计：${priceData.totalPrice}元\n`
          expectText += `===================================`;
          break;                                                
   }
                        
    return expectText;
}

function bestCharge(inputs) {
   if(inputs.length == 0 ){return false;}
   let menu = getMenu(inputs);

   let totalPrice = 0;
   for(let item of menu){
      totalPrice += item.count;
   }

   let priceData = promotions(menu,totalPrice);

   let result = viewModel(menu,priceData);

   return result;
}
