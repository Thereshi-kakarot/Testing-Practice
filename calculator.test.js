const Calculator = require('./calculator');

test('adds two numbers', () => {
    expect(new Calculator().add(2, 3)).toBe(5);
});