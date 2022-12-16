// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown')
const fs = require('fs')
const inquirer = require('inquirer')
// TODO: Create an array of questions for user input
const questions = [
    'What is your github username?',
    'What is your email?',
    'What is the name of your project?',
    'What is the description of your project?',
    'Which license would you like to choose?',
    'What instructions should be added for installation?',
    'How should this project be used?',
    'How should users contribute to the project if they would like to?'
];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('./README.md', generateMarkdown(data), err => err ? console.error(err) : console.log("success!"))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
            type: 'input',
            message: questions[0],
            name: 'github'
        },
        {
            type: 'input',
            message: questions[1],
            name: 'email'
        },
        {
            type: 'input',
            message: questions[2],
            name: 'title'
        },
        {
            type: 'input',
            message: questions[3],
            name: 'description'
        },
        {
            type: 'list',
            message: questions[4],
            choices: ['MIT', 'Apache 2.0', 'GNU GPL v2', 'none'],
            name: 'license'
        },
        {
            type: 'input',
            message: questions[5],
            name: 'installation'
        },
        {
            type: 'input',
            message: questions[6],
            name: 'usage'
        },
        {
            type: 'input',
            message: questions[7],
            name: 'guidelines'
        },
    ]).then((data) => writeToFile(data))
}

// Function call to initialize app
init();
