const capitalize = require('./project');


test('capitalizes the first letter of a string', ()=>{
    expect(capitalize('johnny')).toBe('Johnny');
});