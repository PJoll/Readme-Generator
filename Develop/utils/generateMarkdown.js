// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answer) {
  console.log(answer, answer.title)
  return `# ${answer.title}
<h1 align-center> ${answer.title}</h1>



##Description
${answer.Description}

## Table of Contents
-[Description](#Description)
-[Instalation](#installation)
-[Usage](#usage)
-[Contribution](#contribution)
-[Tests](#tests)

## Installation
${answer.installation}

## Liscence
[![License: ISC](https://img.shields.io/badge/License-${answer.license}-yellow.svg)](https://opensource.org/licenses/ISC)

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
