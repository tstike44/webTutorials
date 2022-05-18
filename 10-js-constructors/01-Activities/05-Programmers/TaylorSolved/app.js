function Programmer(name, position, age, language) {
    this.name = name;
    this.position = position;
    this.age = age;
    this.language = language;
}

Programmer.prototype.toString = function () {
    return `
        name: ${this.name}
        postion: ${this.position}
        age: ${this.age}
        language: ${this.language}
    `;
}

var taylor = new Programmer("Taylor", "Software Engineer", 31, "javascript");
console.log(taylor.toString());