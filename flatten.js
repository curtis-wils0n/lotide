const flatten = function(nestedArray) {
  let returnArray = [];
  for (const item of nestedArray) {
    if (Array.isArray(item)) {
      for (const nestedItem of item) {
        returnArray.push(nestedItem);
      }
    } else {
      returnArray.push(item);
    }
  }
  return returnArray;
};