const fs = require('fs');
const inquirer = require('inquirer');
const generateSVG = require('./lib/generateSVG')
const Shapes = require('./lib/shapes')
const fileName = 'logo.svg'

const questions = [
    {
        type: 'input',
        name: 'logoText',
        message: 'Please enter up to 3 characters that best describe your project.',
    },
    
    {
        type: 'input',
        name: 'textColor',
        message: 'Please enter the color of your logo text.',
    },

    {
        type: 'list',
        name: 'shape',
        message: 'Please choose a shape for your new logo.',
        choices: ['Circle', 'Triangle', 'Square'],
    },

    {
        type: 'input',
        name: 'shapeColor',
        message: 'Please enter the color of your shape.'
    }
]

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err =>
        err ? console.log(err) : console.log('Success!'))
}

function init(){
    inquirer
    .prompt(questions)

    .then((data) => {
        let generatedData = JSON.stringify(generateSVG(data))
        writeToFile(fileName, generatedData);
    });
}

init();
