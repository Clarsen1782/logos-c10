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
            type: 'list',
            name: 'shape',
            message: 'Pick shape for Logo:',
            choices: ['Circle', 'Triangle', 'Square']
        },
        {
            type: 'input',
            name: 'color2',
            message: 'Enter a color for shape background with a keyword or hexadecimal number:',
        },
        {
            type: 'input',
            name: 'filename',
            message: 'Enter file name:',
            default: 'logo.svg',
        }
    ])   
        .then((answers) => {
            const svg = new SVG();
            svg.setTextElement(answers.text, answers.color);

            switch (answers.shape) {
                case 'Triangle':
                  const triangle = new Triangle();
                  triangle.setColor(answers.color2);
                  svg.setShapeElement(triangle);
                  break;
                case 'Square':
                    const square = new Square();
                    square.setColor(answers.color2);
                    svg.setShapeElement(square);
                  break;
                case "Circle":
                  const circle = new Circle();
                  circle.setColor(answers.color2);
                  svg.setShapeElement(circle);
                  break;  
                default:
                  console.log('Invalid Shape Selection');
                  return;
              }
            const svgRep = svg.render();
            fs.writeFile(answers.filename, svgRep, (Err) => Err? console.log(Err): console.log(`SVG saved to ${answers.filename}`))
             
        })
    
  
    class SVG {
        constructor() {
            this.shapeElement = ''
            this.textElement = ''
        }
        render() {
            return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
            ${this.shapeElement}
            ${this.textElement}
        </svg>`;
        }
        setShapeElement(shape) {
            this.shapeElement = shape.render()
        }
        setTextElement(text,color) {
            this.textElement = `<text x="100" y="75" font-size="50" text-anchor="middle" fill="${color}">${text}</text>`;
        }
    }