const assert = require('chai').assert;
const findKeyByValue = require('../index').findKeyByValue;

describe('#findKeyByValue', () => {
  it('should return "score" when given value 5', () => {
    const object = {
      "score": 5,
      "team": "wildcats"
    };
    assert.strictEqual(findKeyByValue(object, 5), "score");
  });
  it('should return "team" when given value "wildcats"', () => {
    const object = {
      "score": 5,
      "team": "wildcats"
    };
    assert.strictEqual(findKeyByValue(object, "wildcats"), "team");
  });
  it('should return undefined when given value "soccer"', () => {
    const object = {
      "score": 5,
      "team": "wildcats"
    };
    assert.strictEqual(findKeyByValue(object, "soccer"), undefined);
  });
});