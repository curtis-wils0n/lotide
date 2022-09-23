const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (Array.isArray(array1[i])) {
      return eqArrays(array1[i], array2[i]);
    }
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};