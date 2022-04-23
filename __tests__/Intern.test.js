const Intern = require("../lib/Intern.js");

const intern = new Intern('Jerry', 90, 'Jerrytom@gmail.com', 'UofT');


test('create intern obj', () => {

    
    expect(intern.school) .toEqual(expect.any(String));
});

test('gets school and role', () => {


    expect(intern.inputSchool()).toEqual(expect.any(String));
    expect(intern.role()).toEqual("Intern");
});
