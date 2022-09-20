const flatten = function(nestedArray) {
  let returnArray = [];
  for (let item of nestedArray) {
    if (Array.isArray(item)) {
      for (nestedItem of item) {
        returnArray.push(nestedItem);
      }
    } else {
      returnArray.push(item);
    }
  }
  return returnArray;
};