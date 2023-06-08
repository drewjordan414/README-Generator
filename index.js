// housekeeping 
const inquirer = require('inquirer');
const fs = require('fs');


// array of questions for user
const content = [
        {
            type: 'input',
            message: 'What is your name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: '',
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
        // {
        //     type: 'input',
        //     message: '',
        //     name: '',
        // }
           
    ];
    // .then((response) => {
    //     console.log(response);
    //     fs.writeFile('README.md', htmlPageContent, (err) =>
    //         err ? console.log(err) : console.log('Successfully created README.md!')
    //     );
    // })
    // .catch((err) => console.error(err));

// function to generate markdown for README
function generateMarkdown(response) {
    return `
    # ${answers.title}

    ## Description
    
    ${answers.description}
    
    ## Table of Contents
    
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)
    
    ## Installation
    
    ${answers.installation}
    
    ## Usage
    
    ${answers.usage}
    
    ## License
    
    This project is covered under the ${answers.license} License.
    
    ## Contributing
    
    ${answers.contribution}
    
    ## Tests
    
    ${answers.tests}
    
    ## Questions
    
    For any questions, please reach out to [${answers.username}](https://github.com/${answers.username}) or [Email me](mailto:${answers.email})
    `;
}