const tail = function(inputArray) {
  let cloneArray = Array.from(inputArray);
  cloneArray.shift();
  return cloneArray;
};