const assertArraysEqual = function(array1, array2) {
  if (!eqArrays(array1, array2)) {
    console.log(`🛑🛑🛑 Assertion failed: (${array1} !== ${array2})`);
    return false;
  } else {
    console.log(`✅✅✅ Assertion passed: (${array1} === ${array2})`);
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