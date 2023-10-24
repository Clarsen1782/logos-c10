const inquirer = require('inquirer');
const fs = require('fs');
const {Triangle, Square, Circle} = require('./library/shapes');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Text for Logo? No more than 3 characters:',
        },
        {
            type: 'input',
            name: 'color',
            message: 'Enter a color for text with a keyword or hexadecimal number:',
        },
        {
            type: 'checkbox',
            name: 'shape',
            message: 'Pick shape for Logo:',
            choices: ['Circle', 'Triangle', 'Square']
        },
        {
            type: 'input',
            name: 'color2',
            message: 'Enter a color for shape background with a keyword or hexadecimal number:',
        },
    ]);
  
    class SVG {
        constructor() {
            this.textElement = ''
            this.shapeElement = ''
        }
        render() {
            return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">`
        }
        setTextElement(text,color) {
            this.textElement = `<text x="100" y="75" font-size="50" text-anchor="middle" fill="${color}">${text}</text>`;
        }
        setShapeElement(shape) {
            this.setShapeElement = shape.render()
        }
    }