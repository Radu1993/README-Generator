const inquirer = require("inquirer");
const fs = require("fs");
const path = require('path');
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is your project's title?",
        name: "title"
    },
    {
        type: "input",
        message: "What is your Github user name?",
        name: "user"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },

    {
        type: "input",
        message: "Please write a description about the project:",
        name: "description"
    },
    {
        type: "list",
        message: "What license does your project have?",
        name: "license",
        choices: [
            "MIT"
        ]
    },
    {
        type: "input",
        message: "What command should  run to install it?",
        name: "installation",
        default: "npm i"
    },
    {
        type: "input",
        message: "What command should be run to run tests?",
        name: "tests",
        default: "npm run test"
    },
    {
        type: "input",
        message: "What does the user need to know about using the repository?",
        name: "usage"
    },
    {
        type: "input",
        message: "What does the user need to know about contributing to the repository?",
        name: "contribute"
    },

];


// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Creating Professional README.md file.");
        writeToFile("./dist/README.md", generateMarkdown({ ...responses }));
    });
}
// function call to initialize program
init();
