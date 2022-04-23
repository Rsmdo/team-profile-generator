const Employee = require("../lib/Employee.js");

const employee = new Employee('Jerry', 60, 'jerrytom@gmail.com');

test('create employee object with name id and contact', () => {

    //make sure employee id dont start with 0 

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('get employee name', () => {

    expect(employee.inputName()).toEqual(expect.any(String));
//use ticks not ""

});
test( 'get employee id', () => {

    expect(employee.inputId()).toEqual(expect.any(Number));
});


test('get employee email', () => {

    expect(employee.inputEmail()).toEqual(expect.any(String));
});