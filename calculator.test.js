const Calculator = require('./calculator');

test('adds two numbers', () => {
    expect(new Calculator().add(2, 3)).toBe(5);
});

test('subtracts two numbers', () => {
    expect(new Calculator().subtract(5, 3)).toBe(2);
});

test('multiplies two numbers', () => {
    expect(new Calculator().multiply(2, 3)).toBe(6);
});

test('divides two numbers', () => {
    expect(new Calculator().divide(6, 3)).toBe(2);
});