const assert = require('chai').assert;
const middle = require('../index').middle;

describe('#middle', () => {
  it('should return [5] for [1, 5, 2]', () => {
    assert.deepEqual(middle([1, 5, 2]), [5]);
  });
  it('should return [4, 5] for [1, 4, 5, 2]', () => {
    assert.deepEqual(middle([1, 4, 5, 2]), [4, 5]);
  });
  it('should return [] for []', () => {
    assert.deepEqual(middle([]), []);
  });
});