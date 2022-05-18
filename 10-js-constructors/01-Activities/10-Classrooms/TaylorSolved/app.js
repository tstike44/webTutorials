var Classroom = require('./classroom.js');
var classroom = new Classroom('Taylor', 3000);

console.log(classroom.toString());

classroom.addNewStudent('John Doe', 'javascript', 4.0);

console.log(classroom.toString());

classroom.addNewStudent('Jane Doe', 'javascript', 4.0);
classroom.addNewStudent('John Dorian Doe', 'javascript', 4.0);
classroom.addNewStudent('Jacob Doe', 'math', 5.0);
classroom.addNewStudent('Jingleheimer Doe', 'javascript', 3.0);

console.log(classroom.toString());