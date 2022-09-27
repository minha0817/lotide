const countOnly = require("../countOnly");
const assert = require("chai").assert;

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const itemsToCount = {
  Jason: true,
  Karima: true,
};

describe("#countOnly", () => {
  it("returns { Jason: 1 } for this", () => {
    assert.deepEqual(countOnly(firstNames, itemsToCount), { Jason: 1 });
  });
});
