const without = require("../without");
const assert = require("chai").assert;

describe("#without", () => {
  it("returns [2, 3] for without([1, 2, 3], [1])", () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });
});
