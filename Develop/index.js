// TODO: Include packages needed for this application

var inquirer = require("inquirer");
var fs = require("fs");

// TODO: Create an array of questions for user input
const questions = new Promise(function (resolve, reject) {
    resolve(inquirer.prompt)[
        {
            type: "input",
            name: "username",
            message: "What is your Git username?",
        },
        {
            type: "input",
            name: "Title",
            message: "What is your Project Title?",
        }
    ]
});



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err =>{
        if (err){
            return console.log(err);
        }
        console.log("congratulations! Your Readme.md file has been created!")
    })
 }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
