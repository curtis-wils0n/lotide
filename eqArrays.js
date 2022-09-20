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