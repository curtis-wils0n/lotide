const findKeyByValue = function(object, value) {
  let output;
  for (let key in object) {
    if (object[key] === value) {
      output = key;
    }
  }
  return output;
};

module.exports = findKeyByValue;