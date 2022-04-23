
const Engineer = require("../lib/Engineer.js");

test('create engineer obj', () => {
    const engineer = new Engineer('Jerry', 60, 'jerrytom@gmail.com', 'jrytom');
    
    expect(engineer.github) .toEqual(expect.any(String));
});
test('gets github username and sets role', () => {
    const engineer = new Engineer('Jerry', 60, 'jerrytom@gmail.com', 'jrytom');

    expect(engineer.inputGithub()).toEqual(expect.any(String));
    expect(engineer.role()).toEqual("Engineer");
});

