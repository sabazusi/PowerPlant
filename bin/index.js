const inquirer = require('inquirer');
const fs = require('fs');

const projectNameValidater = (name) => {
  if (!name) return 'Input something..';
  return true;
};
const projectQuestions = [
  {
    type: 'list',
    name: 'type',
    message: 'Select electron project type',
    choices: ['standard']
  },
  {
    type: 'input',
    name: 'name',
    message: 'Input project name',
    validate: projectNameValidater
  }
];
inquirer.prompt(projectQuestions)
  .then((answer) => {
    const confirmQuestion = [
      {
        type: 'confirm',
        name: 'create',
        message: `Create ${answer.type} electron project \"${answer.name}\"`
      }
    ];
    inquirer.prompt(confirmQuestion)
      .then((confirming) => {
        if (confirming.create) create(answer.name);
      });
  });


const create = (name) => {
  fs.writeFileSync('package.json', JSON.stringify({hoge: 1}));
};
