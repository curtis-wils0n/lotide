const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  if (!eqArrays(actual, expected)) {
    console.log(`🛑🛑🛑 Assertion failed: (${actual} !== ${expected})`);
    return false;
  } else {
    console.log(`✅✅✅ Assertion passed: (${actual} === ${expected})`);
    return true;
  }
};

module.exports = assertArraysEqual;