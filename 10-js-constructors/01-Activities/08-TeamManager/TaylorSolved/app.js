var inquirer = require('inquirer');
function Player(name, position, offense, defense) {
    this.name = name;
    this.position = position;
    this.offense = offense;
    this.defense = defense;
}

Player.prototype.toString = function () {
    return `
        name: ${this.name}
        postion: ${this.position}
        offense: ${this.offense}
        defense: ${this.defense}
    `;
}

inquirer.prompt([
    {
        name: "name",
        message: "What is your name?"
    },
    {
        name: "position",
        message: "What is your position?"
    },
    {
        name: "offense",
        message: "What is your offense?",
        validate: function(answer) {
            if (isNaN(answer)) {
                return false;
            }
            if (answer < 1 || answer > 10) {
                return false;
            }
            return true;
        }
    },
    {
        name: "defense",
        message: "What is your defense?"
    }
]).then(function (answers) {
    var player = new Player(
        answers.name,
        answers.position,
        answers.offense,
        answers.defense
    );
    console.log(player.toString());
})
