const assert = require('chai').assert;
const countOnly = require('../index').countOnly;

describe('#countOnly', () => {
  it('should return 1 for Jason', () => {
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
  it('should return 2 for Salima', () => {
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
      "Salima": true,
      "Karima": true,
      "Fang": true,
      "Agouhanna": false 
    });
    assert.strictEqual(result["Salima"], 2);
  });
  it('should return undefined for Agouhanna', () => {
    const firstNames = [
      "Karl",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Fang",
      "Joe"
    ];
    const result = countOnly(firstNames, {
      "Karima": true,
      "Fang": true,
      "Agouhanna": false,
      "Salima": false
    });
    assert.strictEqual(result["Agouhanna"], undefined);
  });
});