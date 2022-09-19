// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (!(actual === expected)) {
    console.log(`🛑🛑🛑 Assertion failed: (${actual} !== ${expected})`);
    return false;
  } else {
    console.log(`✅✅✅ Assertion passed: (${actual} === ${expected})`);
    return true;
  }
};

// TEST CODE
assertEqual("Lighthouse Lobs", "Lighthouse Labs");
assertEqual(1, 1);