// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown.js");
// TODO: Create an array of questions for user input
const questions = new Promise(function (resolve, reject) {
    resolve(inquirer.prompt)[
        {
            type: "input",
            message: "What is your Git username?",
            name: "username",
          
        },
        {
            type: "input",
            message: "What is your Project Title?",
            name: "Title",
            
        },
        {
            type: "input",
            message: "Write a short description outlining your project.",
            name: "Description"
        }
    ]
});



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log("congratulations! Your Readme.md file has been created!");
    })
};
const writeFileAsync = util.promisify(writeToFile);
// TODO: Create a function to initialize app
async function init() {
    try {
        const userResponses = await inquirer.prompt(questions)


        console.log("Generating Readme!!!!!")

        const markdown = generateMarkdown(userResponses);
        console.log(markdown);
        await fs.writeFileSync("GeneratedReadme.md", markdown);
    } catch (error) {
        console.log(error);
    }
};
// Function call to initialize app
init();
