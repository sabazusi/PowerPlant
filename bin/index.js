const inquirer = require('inquirer');
const fs = require('fs-extra');
const path = require('path');

const emptyValidater = (name) => {
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
    validate: emptyValidater
  },
  {
    type: 'input',
    name: 'author',
    message: 'Input project author name',
    validate: emptyValidater
  },
  {
    type: 'list',
    name: 'license',
    message: 'Select license',
    choices: ['MIT', 'ISC']
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
        if (confirming.create) create(answer);
      });
  });


const create = (answer) => {
  fs.mkdirSync(answer.name);
  fs.copySync(path.join(__dirname, '..', 'template', 'projects', answer.type), answer.name);
  fs.writeFileSync(path.join(answer.name, 'package.json'), JSON.stringify({hoge: 1}));
};
