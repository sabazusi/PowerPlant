var inquirer = require('inquirer');
var questions = [
  {
    type: 'confirm',
    name: 'createStandard',
    message: 'Create standard electron project'
  }
];
inquirer.prompt(questions);
