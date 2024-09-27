const sum = require('./sum')

describe('Sum function', () => {
  it('should sum two numbers', () => {
    expect(sum(1, 2)).toBe(3)
  });

  it('should return -1 when passed -2 and 1', () => {
    expect(sum(-2, 1)).toBe(-1);
  });

  it('should return 0 when 0 and 0 are passed', () => {
    expect(sum(0, 0)).toBe(0)
  })

  it('should throw an error if one or all parameters are not numbers', () => {
    expect(() => sum(2, '3')).toThrow('parameters must be numbers');
  });
})