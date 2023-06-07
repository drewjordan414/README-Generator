// housekeeping 
const inquirer = require('inquirer');
const fs = require('fs');


// array of questions for user
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'name',
        },
        {
            type: 'input',
            message: '',
            name: '',
        },
        {
            type: 'input',
            message: '',
            name: '',
        },
        {
            type: 'input',
            message: '',
            name: '',
        },
        {
            type: 'input',
            message: '',
            name: '',
        }
            .then((response) => {
                console.log(response);
                fs.writeFile('README.md', htmlPageContent, (err) =>
                    err ? console.log(err) : console.log('Successfully created README.md!')
                );
            })
    ])