const assert = require('chai').assert;
const flatten = require('../index').flatten;

describe('#flatten', () => {
  it('should return [1, 2, 3, 4] when given [1, 2, 3, 4]', () => {
    assert.deepEqual(flatten([1, 2, 3, 4]), [1, 2, 3, 4]);
  });
  it('should return [1, 2, 3, 4] when given [1, [2], [3, [4]]]', () => {
    assert.deepEqual(flatten([1, [2], [3, [4]]]), [1, 2, 3, 4]);
  });
  it('should return [] when given []', () => {
    assert.deepEqual(flatten([]), []);
  });
});