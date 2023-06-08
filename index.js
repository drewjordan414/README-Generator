// housekeeping 
const inquirer = require('inquirer');
const fs = require('fs');


// array of questions for user
const content = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'username',
    },
    {
        type: 'checkbox',
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],
        message: 'What license would you like to use?',
        name: 'license',
    },
    {
        type: 'input',
        message: 'What is the description of your project?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the installation instructions for your project?',
        name: 'installation',
    },
    {
        type: "input",
        message: "What is the usage information for your project?",
        name: "usage",
    },
    {
        type: "input",
        message: "What are the contribution guidelines for your project?",
        name: "contribution",
    },
    {
        type: "input",
        message: "What are the test instructions for your project?",
        name: "tests",
    },



];
// function to generate markdown for README
function generateMarkdown(response) {
    return `
    # ${response.title}

    ## Description
    
    ${response.description}
    
    ## Table of Contents
    
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)
    
    ## Installation
    
    ${response.installation}
    
    ## Usage
    
    ${response.usage}
    
    ## License
    
    This project is covered under the ${response.license} License.
    
    ## Contributing
    
    ${response.contribution}
    
    ## Tests
    
    ${response.tests}
    
    ## Questions
    
    For any questions, please reach out to [${response.username}](https://github.com/${response.username}) or [Email me](mailto:${response.email})
    `;
}

// inquirer
inquirer
    .prompt(content)
    .then((response) => {
        console.log(response);
        // save the file 
        const readME = generateMarkdown(response);
        fs.writeFile('README.md', readME, (err) =>
            err ? console.log(err) : console.log('Successfully created README.md!'));
    })
    // error catch
    .catch((error) => {
        if (error.isTtyError){
            // log error
            console.log("Prompt couldn't be rendered in the current environment");
            console.error(error);
        } else{
            // log error
            console.log("Something else went wrong");
            console.error(error);
        }
    });