// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Enter Project title',
        name: 'title'
    },
    {
        type: 'editor',
        message: 'Enter Project description',
        name: 'description'
    },
    {
        type: 'editor',
        message: 'Enter installation instructions',
        name: 'installation'
    },
    {
        type: 'editor',
        message: 'Enter usage information',
        name: 'usage'
    },
    {
        type: 'editor',
        message: 'Enter contribution guidelines',
        name: 'contributing'
    },
    {
        type: 'editor',
        message: 'Enter test instructions',
        name: 'tests'
    },
    {
        type: 'list',
        message: 'Choose a License',
        name: 'license',
        choices: ['Apache-2.0', 'GPL v3', 'MIT', 'CC0-1.0','No License']
    },
    {
        type: 'input',
        message: 'Enter GitHub username',
        name: 'username'
    },
    {
        type: 'input',
        message: 'Enter GitHub email',
        name: 'email'
    }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (error) => {
        if (error) {
            console.error(error);
            return;
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => writeToFile('README.md', data));
}

// Function call to initialize app
init();
