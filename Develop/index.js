// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require ('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
function init (){
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the project title?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Tell us about your project (description, installation and usage)',
      name: 'description',
    },
    {
      type: 'input',
      message: 'How can other Users contribute to the project?',
      name: 'contribution',
    },
    {
        type: 'input',
        message: 'Are there any test instructions?',
        name: 'test',
    },
    {
        type: 'list',
        message: 'What is your license type?',
        name: 'licence',
        choices: ['Apache 2.0', 'Boost', 'BSD', 'BSD 2', 'none']
      },
      {
        type: 'input',
        message: 'What is yout Github Username',
        name: 'username',
      },
      {
        type: 'input',
        message: 'What is your Github profile link?',
        name: 'githubMail',
      },
      {
          type: 'input',
          message: 'What is your email for User to reach out?',
          name: 'email',
      },
  ])
  
// TODO: Create a function to write README file
.then((data) => {
    console.log('index', data)
    const filename = `README.md`;
    let designTemplate = generateMarkdown(data);
    console.log('design', designTemplate)


     fs.writeFile(filename, designTemplate, (err) =>
       err ? console.log(err) : console.log('Success!')
     );
   });
 }
// TODO: Create a function to initialize app

// Function call to initialize app
init();


