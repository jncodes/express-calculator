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

test('divides 1 / 0 to equal Infinity', () => {
    expect(ops.divide(1, 0)).toBe(Infinity);
});

test('divides 1 / Infinity to equal 0', () => {
    expect(ops.divide(1, Infinity)).toBe(0);
});

test('divides 5 / 2 to equal 2', () => {
    expect(ops.divide(5, 2)).toBe(2.5);
});

test('divides -1 / Infinity to equal -0', () => {
    expect(ops.divide(-1, Infinity)).toBe(-0);
});