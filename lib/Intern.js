// importing Employee constructor 
const Employee = require('./Employee');


class Intern extends Employee  {
    constructor (name, id, email, school) {
        super (name, id, email); 

        this.school = school; 
    }


    inputSchool () {
        return this.school;
    }

    role () {
        return "Intern";
    }
}

module.exports = Intern; 