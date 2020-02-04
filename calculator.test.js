const ops = require('./operations');

test('adds 1 + 2 to equal 3', () => {
    expect(ops.add(1, 2)).toBe(3);
});

test('subtracts 5 - 4 to equal 1', () => {
    expect(ops.subtract(5, 4)).toBe(1);
});

test('mulitplies 7 * 4 to equal 28', () => {
    expect(ops.multiply(7, 4)).toBe(28);
});

test('divides 9 / 3 to equal 3', () => {
    expect(ops.divide(9, 3)).toBe(3);
});

// test('adds 1 + 2 to equal 3', () => {
//     expect(ops.add(1, 2)).toBe(3);
// });