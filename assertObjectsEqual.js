const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (!eqObjects(actual, expected)) {
    console.log(`🛑🛑🛑 Assertion failed: (${inspect(actual)} !== ${inspect(expected)})`);
    return false;
  } else {
    console.log(`✅✅✅ Assertion passed: (${inspect(actual)} === ${inspect(expected)})`);
    return true;
  }
};

module.exports = assertObjectsEqual;