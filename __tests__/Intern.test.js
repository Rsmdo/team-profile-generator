const Intern = require("../lib/Intern.js");

const intern = new Intern('Jerry', 90, 'Jerrytom@gmail.com', 'UofT');


test('create intern obj', () => {

    
    expect(intern.school) .toEqual(expect.any(String));
});