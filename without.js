const without = function(array, itemsToRemove) {
  let returnArray = Array.from(array);
  for (let i = 0; i < returnArray.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (returnArray[i] === itemsToRemove[j]) {
        returnArray.splice(i, 1);
        i--;
      }
    }
  }
  return returnArray;
};

module.exports = without;