const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1), keys2 = Object.keys(object2);
  if (keys1.length != keys2.length) {
    return false;
  }
  for (const singleKey of keys1) {
    if (Array.isArray(object1[singleKey]) || Array.isArray(object2[singleKey])) {
      return eqArrays(object1[singleKey], object2[singleKey]);
    } else if (object1[singleKey] !== object2[singleKey]) {
      return false;
    }
  }
  return true;
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};