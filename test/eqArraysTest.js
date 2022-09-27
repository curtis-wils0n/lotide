const assert = require('chai').assert;
const eqArrays = require('../index').eqArrays;

describe('#eqArrays', () => {
  it('should return true for [1, 5] & [1, 5]', () => {
    assert.strictEqual(eqArrays([1, 5], [1, 5]), true);
  });
  it('should return true for [] & []', () => {
    assert.strictEqual(eqArrays([], []), true);
  });
  it('should return false for [1] & [2]', () => {
    assert.strictEqual(eqArrays([1], [2]), false);
  });
  it('should return true for [1, [2, [3]]] & [1, [2, [3]]]', () => {
    assert.strictEqual(eqArrays([1, [2, [3]]], [1, [2, [3]]]), true);
  });
});