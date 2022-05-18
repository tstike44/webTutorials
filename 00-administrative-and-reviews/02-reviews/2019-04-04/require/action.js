var item = require('./item.js');
var inquirer = require('inquirer');

console.log('item', item);

inquirer
  .prompt([
      {
          name: "username",
          message: "What is your username?"
      },
      {
          name: "password",
          message: "What would you like your password to be?",
          type: "password"
      },
      {
          name: "pokemon",
          message: "Which starter do you want?",
          type: "list",
          choices: ["squirtle", "bulbasaur", "charmander"]
      }
  ])
  .then(answers => {
    // Use user feedback for... whatever!!
    console.log(answers.username);
    console.log(answers.password);
    console.log(answers.pokemon);
  });
 
