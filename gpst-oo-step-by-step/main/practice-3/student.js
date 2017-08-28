const Person = require('./person');

module.exports = class Student extends Person {
	constructor(name,age,obj){
		super(name,age);
		this.clazz = obj;
		this.class = new Object();
		this.leader = false;
	}
	introduce(){
        if(this.class['number'] !== undefined &&　this.leader ){
        	return super.introduce() + ' I am a Student. I am Leader of Class 2.';
        }else if(this.class['number'] !== undefined &&　!this.leader){
            return super.introduce() + ' I am a Student. I am at Class 2.';
        }else{
        	return super.introduce() + " I am a Student. I haven't been allowed to join Class.";
        }   
	}
}