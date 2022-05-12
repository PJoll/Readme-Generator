function renderLicenseBadge(license) {
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}


function generateMarkdown(answer) {
  
 return `# ${answer.title}




## Description

${answer.description}

## Table of Contents
-[Description](#description) <br />
-[Instalation](#installation) <br />
-[Usage](#usage) <br />
-[Contribution](#contribution) <br />
-[Tests](#tests) <br />
-[Questions](#questions) <br />

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
