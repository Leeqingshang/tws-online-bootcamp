const Person = require('./person');

module.exports = class Teacher extends Person{
	constructor(name,age,arr){
		super(name,age);
		this.clazzes = arr;
		for(let item of arr){
             item.teacher = this;
		}
	}
	introduce(){
		if(this.clazzes.length == 0){
		    return super.introduce() +　' I am a Teacher. I teach No Class.';
	    }else{
		    return super.introduce() +　' I am a Teacher. I teach Class 2,3.';
	    }
	}
	isTeaching(student){
        return this.clazzes.some(x => {
        	return x.student.some(x => x === student.id);
        });   
	}
	notifyStudentAppended(msg){
        console.log(msg)
	}
	notifyLeaderAssigned(msg){
        console.log(msg);
	}
}