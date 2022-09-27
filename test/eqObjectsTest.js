const eqObjects = require("../eqObjects");
const assert = require("chai").assert;

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "3" };
const cd2 = { c: "1", d: ["2", 3, 4] };

describe("#eqObjects", () => {
  it("returns false for dc and cd", () => {
    assert.deepEqual(eqObjects(dc, cd), false);
  });
});
