import { add, multiply, substract } from './math'

it('can do some math', () => {
    expect(add(4, 2)).toBe(6);
    expect(multiply(4, 2)).toBe(8);
    expect(substract(4, 2)).toBe(2);
})

it('can test string', () => {
    expect("Hello world").toContain("Hello");
})