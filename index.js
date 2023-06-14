// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Enter Project title',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Enter Project description',
        name: 'desc'
    },
    {
        type: 'input',
        message: 'Enter installation instructions',
        name: 'instructions'
    },
    {
        type: 'input',
        message: 'Enter usage information',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Enter contribution guidelines',
        name: 'contribute'
    },
    {
        type: 'input',
        message: 'Enter test instructions',
        name: 'instructions'
    },
    {
        type: 'list',
        message: 'Choose a License',
        name: 'license',
        choices: ['MIT', 'CCO', 'GNU', 'Apache']
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
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
