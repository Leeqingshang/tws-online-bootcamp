let coding = ['||:::',':::||','::|:|','::||:',':|::|',':|:|:',':||::','|:::|','|::|:','|:|::'];

function getClearInput(inputs){
    let inputsArr = inputs.split('');
    let count = inputsArr.reduce(function(x,y){
            return parseInt(x) + parseInt(y);
    });
    let captcha = (Math.ceil(count/10) * 10) - count;
    let clearinputs = inputs + captcha;
    return clearinputs;
}

function getcoding(inputs){
	let result = '|';
    if(inputs.indexOf('-')){
    	inputs = inputs.replace('-','');
    }    
    inputs = getClearInput(inputs);
    for(let i = 0;i < inputs.length;i++){
    	let index = inputs.charAt(i);
        result += ' ' + coding[index];
    }
    return result + ' |';
}

function getnumber(inputs){
	let number = [];
	let result = '';
    inputs = inputs.slice(1,inputs.length-1);
    number = (inputs.match(/[\|\:]{5}/g));
    number.pop();
    for(let item of number){
    	if(coding.indexOf(item) != -1){
    		result += coding.indexOf(item);
    	}
    	if(number.length > 5 && result.length === 5 ){
    		result += '-';
    	}
    }
    return result;
}

function main(inputs) {
	let result = '';
    if(/^[0-9\-]+$/g.test(inputs)){
    	result = getcoding(inputs);
    }
    if(/^[\|\:\s]+$/.test(inputs)){
    	result = getnumber(inputs);
    }
    return result;
}

module.exports = main;