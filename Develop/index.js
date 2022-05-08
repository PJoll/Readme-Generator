// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown.js");

console.log(inquirer);
// TODO: Create an array of questions for user input
const questions = [{ name: "username", type: "input", message: "write name" },
{ name: "title", type: "input", message: "What is the title of your project?" },
{ name: "Description", type: "input", message: "Write a short description outlining your project." }];


//new Promise(function (resolve, reject) {
//     resolve(inquirer.prompt)[
//         {
//             type: "input",
//             message: "What is your Git username?",
//             name: "username",

//         }
// {
//     type: "input",
//     message: "What is your Project Title?",
//     name: "Title",

// },
// {
//     type: "input",
//     message: "Write a short description outlining your project.",
//     name: "Description"
// }
//]
//});



// TODO: Create a function to write README file

const writeFileAsync = util.promisify(writeToFile);
// TODO: Create a function to initialize app
async function init() {
    try {
        var markdown

        const userResponses = await inquirer.prompt(questions).then((answer) => {

            console.log("first name" + answer.first_name);
            console.log("last name" + answer.last_name);

            markdown = answer;

        });
        console.log(userResponses);
        // const markdown = generateMarkdown(userResponses);

        console.log("Generating Readme!!!!!")
        var inputstring = generateMarkdown(markdown);


        console.log(markdown);
        await fs.writeFileSync("GeneratedReadme.md", inputstring);
    } catch (error) {
        console.log(error);
    }
};
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log("congratulations! Your Readme.md file has been created!");
    })
};
// Function call to initialize app
init();
