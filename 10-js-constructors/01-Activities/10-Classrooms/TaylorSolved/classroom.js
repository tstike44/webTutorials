var Student = require('./student.js');

function Classroom (professor, roomNum) {
    this.students = [];
    this.numStudents = function () {
        return this.students.length;
    }
    this.professor = professor;
    this.roomNum = roomNum;
    this.addNewStudent = function(name, subject, gpa) {
        this.students.push(new Student(name, subject, gpa));
    }
    this.toString = function () {
        var baseInfo = `
            professor: ${this.professor}
            room number: ${this.roomNum}
            number of students: ${this.numStudents()}
        `;
        var studentInfo = '';
        for(var i = 0; i < this.students.length; i++) {
            studentInfo += this.students[i].toString();
        }
        return baseInfo + studentInfo;
    }
}

module.exports = Classroom;