
const Manager = require("../lib/Manager.js");
const manager = new Manager('Jerry', 90, 'Jerrytom@gmail.com', 5);
test('creates an Manager object', () => {
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('set role', () => {

    expect(manager.role()).toEqual('Manager');

});