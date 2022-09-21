const assertArraysEqual = function(actual, expected) {
  if (!eqArrays(actual, expected)) {
    console.log(`🛑🛑🛑 Assertion failed: (${actual} !== ${expected})`);
    return false;
  } else {
    console.log(`✅✅✅ Assertion passed: (${actual} === ${expected})`);
    return true;
  }
};

const eqArrays = function(array1, array2) {
  let resultFlag = true;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      resultFlag = false;
      break;
    }
  }
  return resultFlag;
};