var inquirer = require('inquirer');
var questions = [
  {
    type: 'input',
    name: 'input project name',
    message: 'Input project name'
  },
  {
    type: 'confirm',
    name: 'createStandard',
    message: 'Create standard electron project'
  }
];
inquirer.prompt(questions).then((answer) => console.log(answer));
