const { palindrome, averange } = require('../src/bases/palindrome');

test('Prueba palindromo', () => {
    const result = palindrome('Reconocer');
    expect(result).toBe('reconoceR');
});