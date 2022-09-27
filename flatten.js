const flatten = function(nestedArray) {
  let returnArray = [];
  for (const item of nestedArray) {
    if (Array.isArray(item)) {
      returnArray.push(...flatten(item)); //Spread syntax from https://bobbyhadz.com/blog/javascript-append-one-array-to-another-array
    } else {
      returnArray.push(item);
    }
  }
  return returnArray;
};

module.exports = flatten;