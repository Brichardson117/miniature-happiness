const inquirer = require('inquirer');
const fs = require('fs');

const promptmanager = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: "Enter Team manager's name (Required)",
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log("Team manager's name is required!");
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'employeeID',
        message: "Enter your Team manager's employee ID(Required)",
        validate: employeeID => {
          if (employeeID) {
            return true;
          } else {
            console.log("Team manager's employee ID is required!");
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: "Please enter your Team manager's email address",
        validate: email => {
            if (email) {
              return true;
            } else {
              console.log("Team managers email is required!");
              return false;
            }
          }
      },
      {
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
      },
    ]);
};

const internAndEngineer = () =>{
    return inquirer.prompt([
        {
            type: 'list',
            name: 'engineerOrIntern',
            message: 'Would you like to add an engineer or intern to your team?',
            choices:[
               "Engineer",
               "Intern"  ],
            default:true
          },

    ])
}