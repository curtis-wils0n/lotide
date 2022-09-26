const middle = function(array) {
  let outputArray = [];
  let index = parseInt(array.length / 2);
  if (array.length % 2 === 0 && array.length > 2) {
    outputArray.push(array[index - 1], array[index]);
  } else if (array.length > 2) {
    outputArray.push(array[index]);
  }
  return outputArray;
};

module.exports = middle;