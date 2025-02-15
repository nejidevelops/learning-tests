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

  it('should return -2 when -1 and -1 are passed', () => {
    expect(sum(-1, -1)).toBe(-2)
  })

  it('should throw an error if one or all parameters is a string', () => {
    expect(() => sum(2, '3')).toThrow('parameters must be numbers');
  });

  it('should throw an error if one or both params are objects', () => {
    expect(() => sum(2, {})).toThrow('parameters must be numbers')
  })

  it('should throw an error if one or both params are undefined', () => {
    expect(() => sum(2)).toThrow('parameters must be numbers')
  })

  it('should ignore additional parameters and sum only the first two', () => {
    expect(sum(2, 3, 4)).toBe(5);
  });
})