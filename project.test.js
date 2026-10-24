const capitalize = require('./project');
const reverseString = require('./project');

test('capitalizes the first letter of a string', ()=>{
    expect(capitalize('johnny')).toBe('Johnny');
});

test('reverses a string', ()=> {
    expect(reverseString('johnny')).toBe('ynnhoj');
});