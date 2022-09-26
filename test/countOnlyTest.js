const assert = require('chai').assert;
const countOnly = require('../index').countOnly;

describe('#countOnly', () => {
  it('should return 1 for count Jason', () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    const result = countOnly(firstNames, {
      "Jason": true,
      "Karima": true,
      "Fang": true,
      "Agouhanna": false 
    });
    assert.strictEqual(result["Jason"], 1);
  });
});