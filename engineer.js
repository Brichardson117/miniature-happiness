const inquirer = require("inquirer");
const Employee = require("./Employee");

class Engineer extends Employee {

    getGithub() {
        inquirer.prompt({
            type: 'input',
            name: 'github',
            message: "Enter your Engineer's GitHub Username (Required)",
            validate: githubInput => {
              if (githubInput) {
                return true;
              } else {
                console.log("Engineer's Github Username is required!");
                return false;
              }
            }
        })
    }
}

module.exports = Engineer