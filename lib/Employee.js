class Employee {
    constructor(name, id , email) {
        this.name = name;
        this.id = id; 
        this.email = email;
    }

    inputName () {
        return this.name;
    }

    inputId () { 
        return this.id;
    }
    inputEmail () {
        return this.email;
    }

    role () {
        return 'Employee'
    }
};



















module.exports = Employee; 