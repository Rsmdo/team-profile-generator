const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");


const teamArray = [];

const inputManager = () => {
    return inquirer.prompt ([
        { 
            type: 'input', 
            name: 'name', 
            message: '(REQUIRED) Who is your manager?' , 
            validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log ("Please enter your manager's name");
                return false; 
            }
            }
        },
        { 
            type: 'input', 
            name: 'id', 
            message: '(REQUIRED) What is our managers ID number?' , 
            validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log ("Please enter your manager's id number");
                return false; 
            }
            }
        },
        { 
            type: 'input', 
            name: 'email', 
            message: '(REQUIRED) What is your managers email?' , 
            validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log ("Please enter your manager's email ");
                return false; 
            }
            }
        },
        { 
            type: 'input', 
            name: 'officeNumber', 
            message: '(REQUIRED) Please enter your managers office number?' , 
            validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log ("Please enter your manager's office number");
                return false; 
            }
            }
        }
    ])
    .then(managerAdded => {
        const {name, id, email, officeNumber} = managerAdded;
        const manager = new Manager (name, id, email, officeNumber); 
        teamArray.push(manager);
        console.log("================ MANAGER INPUTS ARE BELOW ===============");
        console.log(managerAdded);
    })
};

inputManager();