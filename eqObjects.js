const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1), keys2 = Object.keys(object2);
  if (keys1.length != keys2.length) {
    return false;
  }
  for (const singleKey of keys1) {
    if (typeof object1[singleKey] === 'object') {
      return eqObjects(object1[singleKey], object2[singleKey]);
    }
    if (Array.isArray(object1[singleKey]) || Array.isArray(object2[singleKey])) {
      return eqArrays(object1[singleKey], object2[singleKey]);
    } else if (object1[singleKey] !== object2[singleKey]) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;