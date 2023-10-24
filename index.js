const inquirer = require('inquirer');
const fs = require('fs');
const {Triangle, Square, Circle} = require('./library/shapes');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Text for Logo? No more than 3 characters.',
        },
        {
            type: 'input',
            name: 'color',
            message: 'What color for text?',
        },
        {
            type: 'checkbox',
            name: 'shape',
            message: 'Check shape for Logo',
            choices: ['circle', 'triangle', 'square']
        },
        {
            type: 'input',
            name: 'color2',
            message: 'What color for shape background?',
        },
    ])
    .then((answers) => {
        const logoContent = logo(answers);
        fs.writeFile('logo.svg', logoContent, (err) =>
        err ? console.log(err) : console.log('Generated logo.svg')
        );
    });