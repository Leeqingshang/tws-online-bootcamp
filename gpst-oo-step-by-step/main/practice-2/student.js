const Person = require('./person');
let Class = require('./class');

module.exports = class Student extends Person{
    constructor(name,age,obj){
               super(name,age);     
               this.klass = obj;
               this.class = new Object();
    }
    introduce(){
        if(this.class['number'] !== undefined){
        	return super.introduce() + ' I am a Student. I am Leader of Class 2.';
        }else{
        	return super.introduce() + ' I am a Student. I am at Class 2.';
        }
    }
};