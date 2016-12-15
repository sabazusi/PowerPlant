const inquirer = require('inquirer');

const projectNameValidater = (name) => {
  if (!name) return 'Input something..';
  return true;
};
const projectQuestions = [
  {
    type: 'list',
    name: 'projectType',
    message: 'Select electron project type',
    choices: ['standard']
  },
  {
    type: 'input',
    name: 'projectName',
    message: 'Input project name',
    validate: projectNameValidater
  }
];
const confirmQuestion = [
  {
    type: 'confirm',
    name: 'createStandard',
    message: 'Create standard electron project'
  }
];
inquirer.prompt(projectQuestions).then((answer) => console.log(answer));
