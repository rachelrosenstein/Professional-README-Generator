const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "Enter the title of your project."
        },
        {
            type: "input",
            name: "description",
            message: "Enter a description of your repository. "
        },
        {
            type: "input",
            name: "installation",
            message: "Enter instructions required to install your project."
        },
        {
            type: "input",
            name: "usage",
            message: "Provide instructions and examples for use."
        },
        {
            type: "input",
            name: "credits",
            message: "List out your collaborators/third-party assets/tutrorials used in making your repository."
        },
        {
            type: "input",
            name: "License",
            message: "Enter a license for your repository."
        },
        {
            type: "input",
            name: "github",
            message: "Enter your github username."
        },
    ]);
}

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
