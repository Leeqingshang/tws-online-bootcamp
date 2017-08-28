const Person = require('./person');
let   Class = require('./class');


module.exports = class Teacher extends Person{
	constructor(name,age,arr){
		super(name,age);
		this.classes = arr;
	}
	introduce(){
		if(this.classes.length == 0){
		    return super.introduce() +　' I am a Teacher. I teach No Class.';
	    }else{
		    return super.introduce() +　' I am a Teacher. I teach Class 2,3.';
	    }
	}
}