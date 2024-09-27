function subtract (a, b) {
  if( typeof a === 'number' && typeof b === 'number'){
    return a - b;
  }

  throw new Error('Parameters must be numbers')
}