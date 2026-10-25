const caesarCipher = require('./caesar');

test('shifts a letter by a given factor', () => {
    expect(caesarCipher("a", 3)).toBe("d");
});