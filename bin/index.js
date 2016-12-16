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
inquirer.prompt(projectQuestions)
  .then((answer) => {
    const confirmQuestion = [
      {
        type: 'confirm',
        name: 'createStandard',
        message: `Create ${answer.projectType} electron project \"${answer.projectName}\"`
      }
    ];
    inquirer.prompt(confirmQuestion);
  });
