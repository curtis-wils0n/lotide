const assert = require('chai').assert;
const assertEqual = require('../index').assertEqual;

describe('#assertEqual', () => {
  it('should assert true for assertEqual(5, 5)', () => {
    assert.strictEqual(assertEqual(5, 5), true);
  });
  it('should assert true for assertEqual("string", "string")', () => {
    assert.strictEqual(assertEqual("string", "string"), true);
  });
  it('should assert false for assertEqual("1", 1)', () => {
    assert.strictEqual(assertEqual("1", 1), false);
  });
});