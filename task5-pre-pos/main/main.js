'use strict';
function loadAllItems() {
    return [
        {
            barcode: 'ITEM000000',
            name: '可口可乐',
            unit: '瓶',
            price: 3.00
        },
        {
            barcode: 'ITEM000001',
            name: '雪碧',
            unit: '瓶',
            price: 3.00
        },
        {
            barcode: 'ITEM000002',
            name: '苹果',
            unit: '斤',
            price: 5.50
        },
        {
            barcode: 'ITEM000003',
            name: '荔枝',
            unit: '斤',
            price: 15.00
        },
        {
            barcode: 'ITEM000004',
            name: '电池',
            unit: '个',
            price: 2.00
        },
        {
            barcode: 'ITEM000005',
            name: '方便面',
            unit: '袋',
            price: 4.50
        }
    ];
}

function loadPromotions() {
    return [
        {
            type: 'BUY_TWO_GET_ONE_FREE',
            barcodes: [
                'ITEM000000',
                'ITEM000001',
                'ITEM000005'
            ]
        }
    ];
}

function getCdata(barcode){
   let dataArray = loadAllItems();
   for(let item of dataArray){
      if(barcode.includes(item.barcode)){
        item.barcode = barcode;
        return item;
      }
   }
   return null;
}

function getCommodaty(inputs){
   let result = [];
   for(let item of inputs){
       let obj = getCdata(item);
       if(obj){
          result.push(obj);
       }
   }
   return result;
}

function extendData(arr,obj){
   let barcodeData = obj.barcode.split('-');
   let barcode = barcodeData[0];
   let len = parseInt(barcodeData[1]);
   for(let i = 0; i < len; i++){
       obj.barcode = barcode;
       arr.push(obj);
   } 
}

function find(arr,obj){
   if(arr.length === 0){return null}
   for( let item of arr ){
        if(item.barcode === obj.barcode){
            return item;
        }
   }

   return null;
}


function count(commodaty){
    let result = [];
    let countResult = [];
    for(let item of commodaty){
        if(item.barcode.includes('-')){
            extendData(result,item);
        }else{
            result.push(item);
        }
    }  
   
    for(let item of result){
        let obj = find(countResult,item); 
        if(obj){
            obj.amount++;
        }else{
            item.amount = 1;
            countResult.push(item);
        }
    }

    for(let item of countResult){
        item.summary = item.price * (item.amount - Math.floor(item.amount/3));
    }

    return countResult;
}

function presentCount(arr,obj){
    for(let item of arr){
        if(item.type === "BUY_TWO_GET_ONE_FREE"){
            if(item.barcodes.indexOf(obj.barcode) !== -1){
                let presentItem = {};
                presentItem.name = obj.name;
                presentItem.price = obj.price;
                presentItem.unit = obj.unit;
                presentItem.amount = Math.floor(obj.amount/3);

                return presentItem;
            }
        }
    }

    return null;
}

function getPresent(sheet){
   let result = []; 
   let promotions = loadPromotions();
   
   for(let item of sheet){
       let obj = presentCount(promotions,item);
       if(obj){
          result.push(obj);
       }
   } 
   return result;
}


function getSummary(commodatySheet,present){

   let summary = 0;
   let promotions = 0;
   for(let item of commodatySheet){
       summary += item.summary; 
   } 
   for(let item of present){
       promotions += (item.amount * item.price);
   }

   return {summary:summary,promotions:promotions};
}


function printExpectText(items) {
  let saveMoney = 0;
  let totalPrice = 0;
  let expectText = `***<没钱赚商店>收据***\n`;
  items.forEach(item => {
    saveMoney += item.saveMoney;
    totalPrice += item.totalPrice;
    expectText += `名称：${item.name}，数量：${item.count}${item.unit}，单价：${parseFloat(item.price).toFixed(2)}(元)，小计：${parseFloat(item.count * item.price - item.saveMoney).toFixed(2)}(元)\n`
  });
  expectText += "----------------------\n";
  expectText += `总计：${parseFloat(totalPrice).toFixed(2)}(元)
节省：${parseFloat(saveMoney).toFixed(2)}(元)
**********************`;

  return expectText;
}

function printModel(cs,present,summary){
   let expectText=`***<没钱赚商店>购物清单***\n`;
   for(let item of cs){
       expectText += `名称：${item.name}，数量：${item.amount}${item.unit}，单价：${item.price.toFixed(2)}(元)，小计：${item.summary.toFixed(2)}(元)\n`;
   }
      
      expectText += `----------------------\n`;
      expectText += `挥泪赠送商品：\n`;  
                      
   for(let item of present){
       expectText += `名称：${item.name}，数量：${item.amount}${item.unit}\n`; 
   }
   expectText += `----------------------\n`;
   expectText += `总计：${summary.summary.toFixed(2)}(元)\n`;
   expectText += `节省：${summary.promotions.toFixed(2)}(元)\n`;
   expectText += `**********************`;   
   return expectText;      
}



module.exports = function printInventory(inputs) {
    let commodaty = getCommodaty(inputs);
    let commodatySheet = count(commodaty);
    let present = getPresent(commodatySheet);
    let summary = getSummary(commodatySheet,present);
   
     
    let expectText = printModel(commodatySheet,present,summary)
    console.log(expectText);

};