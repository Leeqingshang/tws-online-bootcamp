// Write your code here
module.exports = class Person {
	constructor(name,age){
           this.name = name;
           this.age = age; 
	}
	introduce(){
		return 'My name is Tom. I am 21 years old.';
	}
}