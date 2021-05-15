// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(licence) {
  if(licence === 'Apache 2.0') {
    return'[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  }
  else if (licence === 'Boost') {
    return'[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
  }
  else if (licence === 'BSD'){
    return'[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
  }
  else if(licence === 'BSD 2'){
    return'[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'
  }
  else {
    return''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licence) {
if(licence === 'none'){
  return''
}
else{
  return'* [Licence](#Licence)';
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licence) {
if (licence === 'none') {
  return'';
}
else{ 
  return'## Licence';
}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log('generateMarkdown', data)
  const {title, description, contribution, test, licence, username, githubMail, email} = data
  return`# ${title}
# Table of Contents
* [Description](#Description)
* [Contribution](#Contribution)
* [Test](#Test)
* [Github](#Github)
* [Contact](#Contact)
${renderLicenseLink(licence)} 

## Description
     ${description}

## Contribution
     ${contribution}
    
## Test
     ${test}

${renderLicenseSection(licence)}

${renderLicenseBadge(licence)}

## Github
    This project was created by ${username}

    If you like to know more about projects and other website created, click on the following link: ${githubMail}

## Contact
     For more information about the project, or to know more about the creator, send an email to this address: ${email}
    
     `;
 }

module.exports = generateMarkdown;
