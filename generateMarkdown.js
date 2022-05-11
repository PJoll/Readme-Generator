// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answer) {
  
  return 
  `# ${answer.title}




##Description

${answer.description}

## Table of Contents
-[Description](#description)
-[Instalation](#installation)
-[Usage](#usage)
-[Contribution](#contribution)
-[Tests](#tests)
-[Questions](#questions)

## Installation
${answer.installation}

## Liscence
${(answer.licence)}

## Usage
${answer.usage}


## Contribution
${answer.contribution}

## Tests
${answer.tests}

## Questions
${answer.questions}

If any further questions, Reach out to me on.. (https://github.com/PJoll)
 or at my email pjoll415@gmail.com








`;
}

module.exports = generateMarkdown;
