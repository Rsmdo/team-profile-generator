const Employee = require("./Employee");

class Engineer extends Employee {
    constructor (name, id, email, github) {
        //allows to extend employee constuctor
        super (name, id, email);
        //referring to the parent class

        this.github = github; 
    }

    inputGithub() {
        return this.github;
    }

    role () {
        return "Engineer";
    }
}


module.exports = Engineer; 