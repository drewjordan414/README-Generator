
// Initialize variables
let title = getUserInput("Enter project title:")
let description = getUserInput("Enter project description:")
let installationInstructions = getUserInput("Enter installation instructions:")
let usageInformation = getUserInput("Enter usage information:")
let contributionGuidelines = getUserInput("Enter contribution guidelines:")
let testInstructions = getUserInput("Enter test instructions:")
let license = getUserInputFromList("Choose a license from the options:")
let githubUsername = getUserInput("Enter your GitHub username:")
let emailAddress = getUserInput("Enter your email address:")

// Generate the README content
let readmeContent = generateReadmeContent(title, description, installationInstructions, usageInformation, contributionGuidelines, testInstructions, license, githubUsername, emailAddress)

// Save the README content to a file
saveToFile("README.md", readmeContent)

// Function to generate README content
function generateReadmeContent(title, description, installationInstructions, usageInformation, contributionGuidelines, testInstructions, license, githubUsername, emailAddress){
    let readmeContent = ""
    
    // Generate the badge for the chosen license
    let licenseBadge = generateLicenseBadge(license)
    
    // Generate the README content
    readmeContent += `# ${title}\n\n`
    readmeContent += `${licenseBadge}\n\n`
    readmeContent += `## Description\n\n${description}\n\n`
    readmeContent += `## Table of Contents\n\n`
    readmeContent += `- [Description](#description)\n`
    readmeContent += `- [Installation](#installation)\n`
    readmeContent += `- [Usage](#usage)\n`
    readmeContent += `- [License](#license)\n`
    readmeContent += `- [Contributing](#contributing)\n`
    readmeContent += `- [Tests](#tests)\n`
    readmeContent += `- [Questions](#questions)\n\n`
    readmeContent += `## Installation\n\n${installationInstructions}\n\n`
    readmeContent += `## Usage\n\n${usageInformation}\n\n`
    readmeContent += `## License\n\nThis application is covered under the ${license} license.\n\n`
    readmeContent += `## Contributing\n\n${contributionGuidelines}\n\n`
    readmeContent += `## Tests\n\n${testInstructions}\n\n`
    readmeContent += `## Questions\n\n`
    readmeContent += `For additional questions, you can reach out to me via email at ${emailAddress}.\n`
    readmeContent += `You can also visit my GitHub profile: [${githubUsername}](https://github.com/${githubUsername})\n\n`
    
    return readmeContent
}
    

// Function to generate the license badge
function generateLicenseBadge(license){
    // Logic to determine the badge based on the chosen license
    if(license === "MIT"){
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    } else if(license === "Apache 2.0"){
        return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    } else if(license === "GPL 3.0"){
        return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    }else if(license === "BSD 3"){
        return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
    } else if(license === "None"){
        return ""
    }
};
    

// Function to save content to a file
function saveToFile(filename, content){
    // save the content to the specified file
    let filename = prompt("Enter the filename to save the README to:")
    let content = generateReadmeContent();
};
    