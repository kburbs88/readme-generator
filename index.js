// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown.js';


const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter the project name:',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a project description:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information',
    },
    {
        type: 'input',
        name: 'contribution guidelines',
        message: 'Enter guidelines for any contributers',   
    },
    {
        type: 'input',
        name: 'test instructions',
        message: 'Enter any test instructions',   
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license:',
        choices: ['MIT', 'Apache', 'GPL', 'None'],
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'gitHubLink',
        message: 'Enter the link to your GitHub here'  
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    }
];

function init() {
    inquirer
    .prompt(questions).then(function (data){
        writeToFile('generatedREADME.md', generateMarkdown(data))
    })
}
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('File created and content written successfully!');
    });
}


//  a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// TODO: Create a function to initialize app

// Function call to initialize app
init();

