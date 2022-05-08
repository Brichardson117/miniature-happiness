const inquirer = require('inquirer');
const Employee = require('./Employee');

class Intern extends Employee {
  constructor(school) {
      inquirer.prompt({
        type: 'input',
        name: 'school',
        message: "Please enter the name of the school your Intern attends(Required)",
        validate: school => {
            if (school) {
              return true;
            } else {
              console.log("Intern's school is required!");
              return false;
            }
          }
      })
  }
}

module.exports = Intern