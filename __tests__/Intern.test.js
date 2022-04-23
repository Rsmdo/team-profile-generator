const Intern = require("../lib/Intern.js");
test('create intern obj', () => {
    const intern = new Intern('Jerry', 90, 'Jerrytom@gmail.com', 'UofT');
    
    expect(intern.school) .toEqual(expect.any(String));
});