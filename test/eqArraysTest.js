const eqArrays = require("../eqArrays");
const assert = require("chai").assert;

eqArrays([1, 2, "3"], [1, 2, 3]), true;
eqArrays(["a", "b", "c"], ["a", "b", "c"]), true;

describe("#eqArrays", () => {
  it("returns true for this ", () => {
    assert.deepEqual(eqArrays(["a", "b", "c"], ["a", "b", "c"]), true);
  });

  it("returns false for this ", () => {
    assert.deepEqual(eqArrays([1, 2, "3"], [1, 2, 3]), false);
  });
});
