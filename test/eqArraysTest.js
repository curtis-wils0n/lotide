const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe('#eqArrays', () => {
  it('should return true for [1, 5] & [1, 5]', () => {
    assert.strictEqual(eqArrays([1, 5], [1, 5]), true);
  });
});