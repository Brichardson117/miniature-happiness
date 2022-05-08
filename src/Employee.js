const inquirer = require("inquirer");

class Employee {
    getName() {
        inquirer.prompt({
            type: 'input',
            name: 'name',
            message: "Enter their name here",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                  } else {
                    console.log("Name is required!");
                    return false;
                  }
            }
        })
    }

    getID() {
        inquirer.prompt({
         type: 'input',
         name: 'employeeID',
         message: "Enter employee ID(Required)",
         validate: employeeID => {
          if (employeeID) {
            return true;
        } else {
            console.log( "Employee ID is required!");
            return false;
        }
    }
        })
    }

    getEmail() {
        inquirer.prompt({
            type: 'input',
            name: 'email',
            message: "Enter email address",
            validate: email => {
                if (email) {
                  return true;
                } else {
                  console.log("Email is required!");
                  return false;
                }
              }
        })
    }

    getRole() {
        inquirer.prompt({
         type:'list',
         name:'employee',
         message: "would you like to add another employee?",
         choices: ['Intern', 'Engineer'],
         validate: addEmployee => {
             if(addEmployee === 'Intern') {
                
             }
         }
          
        })
    }
}

module.exports = Employee