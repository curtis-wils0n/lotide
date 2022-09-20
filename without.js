const without = function(source, itemsToRemove) {
  let returnArray = Array.from(source);
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