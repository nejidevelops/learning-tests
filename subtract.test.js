const subtract = require('./subtract')

describe('Subtraction function', () => {
  it('should subtract 2 numbers', () => {
    expect(() => (subtract(1, 2)).toBe(-1))
  })

  it('should return 0 when 0 and 0 are passed', () => {
    expect(() => (subtract(0, 0)).toBe(0))
  })

  it('should return -2 when -1 and -1 are passed', () => {
    expect(() => (subtract(-1, -1)).toBe(-2))
  })

  it('should throw an error if one or all parameters is a string', () => {
    expect(() => (subtract(2, '3')).toThrow('parameters must be numbers'))
  })

  it('should throw an error if one or both params are objects', () => {
    expect(() => (subtract(2, {})).toThrow('parameters must be numbers'))
  })

  it('should throw an error if one or both params are undefined', () => {
    expect(() => (subtract(2)).toThrow('parameters must be numbers'))
  })
  
  it('should ignore additional parameters and subtract only the first two', () => {
    expect(() => (subtract(2,3, 4)).toBe(-1))
  });
})