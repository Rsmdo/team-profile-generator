const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");
const { connected } = require("process");


const employees = [];

const inputEmployee = () => {
    return inquirer.prompt ([
        { 
            type: 'input', 
            name: 'name', 
            message: '(REQUIRED) Who is your team member?' , 
            validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log ("Please enter your team members name");
                return false; 
            }
            }
        },
        {
            type: "list",
            message: "Select team member's role",
            choices: [
                "Engineer",
                "Intern",
                "Manager"
            ],
            name: "role",
            default: true
        },
        { 
            type: 'input', 
            name: 'officeNumber', 
            message: '(REQUIRED) What is your Managers office number?' , 
            when: (input) => input.role === "Manager",
            validate: nameInput => {
                if (nameInput ) {
                    return true;
                } else {
                    console.log ("Please enter the Manager office number")
                }
            }
            
        },
        { 
            type: 'input', 
            name: 'school', 
            message: '(REQUIRED) What is your Interns school' , 
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if (nameInput ) {
                    return true;
                } else {
                    console.log ("Please enter The Interns School")
                }
            }
        },
        { 
            type: 'input', 
            name: 'github', 
            message: '(REQUIRED) What is your team members github username?' , 
            when: (input) => input.role === "Engineer",
            validate: nameInput => {
                if (nameInput ) {
                    return true;
                } else {
                    console.log ("Please enter the Engineers github username")
                }
            }
        },
        
        { 
            type: 'input', 
            name: 'email', 
            message: '(REQUIRED) What is your team members email?' , 
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
            message: '(REQUIRED) Please enter your team members id?' , 
            validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log ("Please enter your manager's office number");
                return false; 
            }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add more team members?',
            default: false
        },
    ])
    .then(memberAdded => {
        let { name, id, email, role, github, school, confirmAddEmployee } = memberAdded;
        let employeeToAdd;
        if (inputEmployee.role === "Manager"){
            const manager = new Manager (name, id, email, officeNumber); 
        }else if (inputEmployee.role  === 'Engineer') {
            const engineer = new Engineer (name, id, email, github);
        }else if (inputEmployee.role === 'Intern') {
            const intern = new Intern(name, id, email, school);
        }
        employees.push(memberAdded);

        if (memberAdded.confirmAddEmployee){
            return inputEmployee(employees);
        } else {
            console.log("================ Team member INPUTS ARE BELOW ===============");
            console.log(employees);

        }


    })
    
};

inputEmployee();