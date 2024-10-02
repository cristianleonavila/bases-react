const { averange } = require('../src/bases/averange');

describe('Calcular media', ( ) => {
    test('del mismo valor', () => {
        expect(averange([1])).toBe(1);
    });
    test('array con varios elementos', () => {
        expect(averange([1, 2, 3, 4, 5])).toBe(3);
    });    
});