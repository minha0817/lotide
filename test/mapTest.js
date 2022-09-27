const map = require("../map");
const assert = require("chai").assert;

const words = ["ground", "control", "to", "major", "tom"];
const callback = (item) => item[0];

describe("#map", () => {
  it("returns [g, c, t, m, t] for this", () => {
    assert.deepEqual(map(words, callback), ["g", "c", "t", "m", "t"]);
  });
});
