const assert = require('chai').assert;
const middle = require('../middle');

describe('#middle', () => {
  it('should return [5] for [1, 5, 2]', () => {
    assert.deepEqual(middle([1, 5, 2]), [5]);
  });
});