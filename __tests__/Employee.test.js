const Employee = require("../lib/Employee.js");

test('create employee object with name id and contact', () => {
    const employee = new Employee('Jerry', 60, 'jerrytom@gmail.com');
    //make sure employee id dont start with 0 

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

