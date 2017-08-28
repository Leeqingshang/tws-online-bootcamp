// Write your code here
module.exports = class Class {

	constructor(number){
           this.number = number;
           this.leader;
           this.student = [];
	}
	
	assignLeader(student){
		student.leader = true;
		if(this.teacher){
			this.teacher.notifyLeaderAssigned(`${student.name} become Leader of Class ${student.clazz.number}`);
		}
		if(this.student.length === 0){
			return 'It is not one of us.';
		}else{
			return 'Assign team leader successfully.';
		}
	}

	appendMember(student){
		if (this.teacher) {
            this.teacher.notifyStudentAppended(`${student.name} has joined Class ${student.clazz.number}`);
        }
		student.class['number'] = this.number;
		this.student.push(student.id);
	}

	hasStudent(id){
        return this.student.some(x => x === id);
	}
}