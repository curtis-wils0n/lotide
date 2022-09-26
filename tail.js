const tail = function(array) {
  let cloneArray = Array.from(array);
  cloneArray.shift();
  return cloneArray;
};

module.exports = tail;