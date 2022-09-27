const assert = require('chai').assert;
const eqObjects = require('../index').eqObjects;

describe('#eqObjects', () => {
  it('should return true if objects are identical', () => {
    const object1 = { key1: "value1", key2: "value2" };
    const object2 = { key1: "value1", key2: "value2" };
    assert.deepEqual(eqObjects(object1, object2), true);
  });
  it('should return false if objects are not identical', () => {
    const object1 = { key1: "value2", key2: "value2" };
    const object2 = { key1: "value1", key2: "value2" };
    assert.deepEqual(eqObjects(object1, object2), false);
  });
  it('should return true if both objects are empty', () => {
    const object1 = {};
    const object2 = {};
    assert.deepEqual(eqObjects(object1, object2), true);
  });
});
