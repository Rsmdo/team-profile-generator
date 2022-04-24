const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");

const generateHTML = require('./src/generateHTML');




const employees = [];

const managerInput = () => {
    return inquirer.prompt ([
        { 
            type: 'input', 
            name: 'name', 
            message: '(REQUIRED) Who is your Team Manager name?' , 
            validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log ("Please enter your Team Managers name");
                return false; 
            }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "(REQUIRED)Please enter your Team managers id",
            validate: managerInput => {
                if  (managerInput) {
                    return true; 
                } else {
                    console.log ("Please enter the manager's id number")
                    return false;
                }
            }
        },
        { 
            type: 'input', 
            name: 'officeNumber', 
            message: '(REQUIRED) What is your Managers office number?' , 
            validate: officeInput => {
                if (officeInput ) {
                    return true;
                } else {
                    console.log ("Please enter the Manager office number")
                }
            }
            
        },
        // { 
        //     type: 'input', 
        //     name: 'school', 
        //     message: '(REQUIRED) What is your Interns school' , 
        //     when: (input) => input.role === "Intern",
        //     validate: nameInput => {
        //         if (nameInput ) {
        //             return true;
        //         } else {
        //             console.log ("Please enter The Interns School")
        //         }
        //     }
        // },
        // { 
        //     type: 'input', 
        //     name: 'github', 
        //     message: '(REQUIRED) What is your team members github username?' , 
        //     when: (input) => input.role === "Engineer",
        //     validate: nameInput => {
        //         if (nameInput ) {
        //             return true;
        //         } else {
        //             console.log ("Please enter the Engineers github username")
        //         }
        //     }
        // },
        
        { 
            type: 'input', 
            name: 'email', 
            message: '(REQUIRED) What is your Managers email?' , 
            validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log ("Please enter your manager's email ");
                return false; 
            }
            }
        },
        { 
            type: 'input', 
            name: 'id', 
            message: '(REQUIRED) Please enter your Managers id?' , 
            validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log ("Please enter your manager's id number");
                return false; 
            }
            }
        }
    ])
    .then(managerAdded => {
        const  { name, id, email, officeNumber } = managerAdded; 
        const manager = new Manager (name, id, email, officeNumber);

        employees.push(manager); 
 

        console.log("================ This is Your Manager INPUTS ===============");
        console.log(manager);

    })
    
};

const otherEmployees = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: " (REQUIRED)What's the name of your employee", 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter a name");
                    return false; 
                }
            }
        },
        {
            type: 'list',
            name: 'role',
            message: " (REQUIRED)Choose your employee's role",
            choices: ['Engineer', 'Intern']
        },

        {
            type: 'input',
            name: 'id',
            message: "(REQUIRED) Enter your employee id.",
            validate: idInput => {
                if  (idInput) {
                    return true; 
                } else {
                    console.log ("Please enter id number")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "(REQUIRED) enter the employee's email.",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log ("Please enter youremployee email ");
                    return false; 
                }
                }
        },
        {
            type: 'input',
            name: 'github',
            message: "(REQUIRED) enter the employee's github username.",
            when: (input) => input.role === "Engineer",
            validate: nameInput => {
                if (nameInput ) {
                    return true;
                } else {
                    console.log ("Enter engineer github user name")
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "(REQUIRED) enter the intern's school",
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("enter interns school")
                }
            }
        },
        {
            type: 'confirm',
            name: 'confim',
            message: 'Would you like to add more team members?',
            default: false
        }
    ])
    .then(employeeInput => {


        let { name, id, email, role, github, school, confirm } = employeeInput; 
        let employee; 

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);

 

        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);


        }
        console.log("====================Employee Inputs below====================================");
        console.log(employee);

        employees.push(employee); 

        if (confirm) {
            return otherEmployees(employees); 
        } else {
            return employees;
        }
    })
};




const writeFile = data => {
     fs.writeFile('./dist/index.html', data, err => {

         if (err) {
             console.log("this is hte write file error ", err);
             return;

         } else {
             console.log("Your team profile has been created, checkout the index.html file")
         }
     })
}; 

managerInput()
 .then(otherEmployees) //check to see it works in order 
   .then(employees => {
     return generateHTML(employees);
   })
   .then(pageHTML => {
     return writeFile(pageHTML);
   })
   .catch(err => {
  console.log("this error is from the block init function code", err);
   });