const assert = require('chai').assert;
const tail = require('../index').tail;

describe('#tail', () => {
  it('should return [2, 3, 4] for [1, 2, 3, 4]', () => {
    assert.deepEqual(tail([1, 2, 3, 4]), [2, 3, 4]);
  });
  it('should return [2, 2, [2]] for [1, 2, 2, [2]]', () => {
    assert.deepEqual(tail([1, 2, 2, [2]]), [2, 2, [2]]);
  });
  it('should return [] for []', () => {
    assert.deepEqual(tail([]), []);
  });
});