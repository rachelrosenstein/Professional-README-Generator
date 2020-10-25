const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const fileName = "README.md"

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
        }
    ]);
}

function generateMD(answers) {
    return `
    Title of Project: ${answers.title}`
        ;
}

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log("YAY, your README was generated")
    });
}

const writeFileAsync = util.promisify(fs.writeFile);

async function init() {
    try {
        const answers = await promptUser();

        const html = generateMD(answers);

        await writeFileAsync("README.md", html);

        console.log("Successfully wrote to README.md");
    } catch (err) {
        console.log(err);
    }
}

init();
//
// function to initialize program
//async function init() {
//    try {

//       const userResponses = await inquirer.prompt(questions);
//       console.log("Your responses: ", userResponses);
//        console.log("Successfully wrote to README.md");

//    } catch (err) {
//      console.log(err);
//  }
//}

// function call to initialize program finally 