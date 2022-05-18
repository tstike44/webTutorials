function Student(name, subject, gpa) {
    this.name = name;
    this.subject = subject;
    this.gpa = gpa;
    this.toString = function () {
        return `
            name: ${this.name}
            favorite subject: ${this.subject}
            current GPA: ${this.gpa}
        `;
    }
}

module.exports = Student;