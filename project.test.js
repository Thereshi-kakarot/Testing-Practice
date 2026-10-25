const capitalize = require('./project');
const reverseString = require('./reverse');
const calculator = require('./calculator');

test('capitalizes the first letter of a string', ()=>{
    expect(capitalize('johnny')).toBe('Johnny');
});

test('reverses a string', ()=> {
    expect(reverseString('johnny')).toBe('ynnhoj');
});

test