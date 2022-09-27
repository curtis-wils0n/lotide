const assert = require('chai').assert;
const letterPositions = require('../index').letterPositions;

describe('#letterPositions', () => {
  it('should return h: [0] for "hello world"', () => {
    assert.deepEqual(letterPositions("hello world").h, [0]);
  });
  it('should return h: [0, 12] for "hello world h"', () => {
    assert.deepEqual(letterPositions("hello world h").h, [0, 12]);
  });
  it('should return {} for ""', () => {
    assert.deepEqual(letterPositions(""), {});
  });

});