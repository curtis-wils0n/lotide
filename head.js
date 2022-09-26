const head = function(array) {
  let cloneArray = Array.from(array);
  return cloneArray.shift();
};

module.exports = head;