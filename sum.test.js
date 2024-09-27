const sum = require('./sum')

describe('Sum function', () => {
  it('should sum two numbers', () => {
    expect(sum(1, 2)).toBe(3)
  });

  it('should throw an error if one or all parameters are not numbers', () => {
    expect(() => sum(2, '3')).toThrow('parameters must be numbers');
  });
})