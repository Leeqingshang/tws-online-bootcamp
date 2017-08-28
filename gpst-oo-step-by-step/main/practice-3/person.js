// Write your code here
module.exports = class Person {
	constructor(name,age){
		   this.id = Math.floor(Math.random() * 100 + 1) + Date.now();
           this.name = name;
           this.age = age;
	}
	introduce(){
		  return 'My name is ' + this.name + '. I am ' + this.age + ' years old.'
	}
}