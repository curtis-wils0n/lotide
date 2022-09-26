//Array functions
const head =                require('./head');
const tail =                require('./tail');
const middle =              require('./middle');
const countOnly =           require('./countOnly');
const findKey =             require('./findKey');
const findKeyByValue =      require('./findKeyByValue');
const flatten =             require('./flatten');
const map =                 require('./map');
const takeUntil =           require('./takeUntil');
const without =             require('./without');
//String functions
const countLetters =        require('./countLetters');
const letterPositions =     require('./letterPositions');
//Equality checkers
const eqArrays =            require('./eqArrays');
const eqObjects =           require('./eqObjects');
//Assertions
const assertEqual =         require('./assertEqual');
const assertArraysEqual =   require('./assertArraysEqual');
const assertObjectsEqual =  require('./assertObjectsEqual');

module.exports = {
  head,
  tail,
  middle,
  countOnly,
  findKey,
  findKeyByValue,
  flatten,
  map,
  takeUntil,
  without,
  countLetters,
  letterPositions,
  eqArrays,
  eqObjects,
  assertEqual,
  assertArraysEqual,
  assertObjectsEqual,
};