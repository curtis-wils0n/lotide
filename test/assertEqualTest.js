const assert = require('chai').assert;
const assertEqual = require('../assertEqual');

describe('#assertEqual', () => {
  it('should return true for assertEqual(5, 5)', () => {
    assert.strictEqual(assertEqual(5, 5), true);
  });
});