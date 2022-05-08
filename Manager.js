const inquirer = require('inquirer');
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(office) {
        inquirer.prompt({
            type: 'input',
            name: 'office',
            message: "Please enter Team manager's office number(Required)",
            validate: office => {
              if (office) {
               return true;
             } else {
               console.log("Team manager's office number is required!");
               return false;
            }
          }
        })
    }
}

module.exports = Manager