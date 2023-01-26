const member = require('./index.js');
const R = require('ramda');

describe('tests Model functionality', () => {
  it('should export a function', () => {
    expect(R.is(Object, member)).toBe(true);
  })

  it('should have a _getDb method that returns a DB instance', () => {
    const hasGetDbMethod = R.hasIn('_getDb');
    expect(hasGetDbMethod(member)).toBe(true);

    const db = member._getDb()
    expect(R.is(Object, db)).toBe(true);
  })

  it('should have a getAll method', () => {
    const hasGetAllMethod = R.hasIn('getAll');
    expect(hasGetAllMethod(member)).toBe(true);
  })

})


