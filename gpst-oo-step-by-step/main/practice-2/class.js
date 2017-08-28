// Write your code here
function Class(number){
     this.number = number;
}
Class.prototype.assignLeader = function(obj){
     obj.class['number'] = this.number;
}
module.exports = Class;