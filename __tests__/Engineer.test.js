
const Engineer = require("../lib/Engineer.js");

const engineer = new Engineer('Jerry', 60, 'jerrytom@gmail.com', 'jrytom');

test('create engineer obj', () => {
    
    expect(engineer.github) .toEqual(expect.any(String));
});
test('gets github username and sets role', () => {


    expect(engineer.inputGithub()).toEqual(expect.any(String));
    expect(engineer.role()).toEqual("Engineer");
});

