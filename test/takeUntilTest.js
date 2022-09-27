const takeUntil = require("../takeUntil");
const assert = require("chai").assert;

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const callback = (x) => x < 0;

describe("#takeUntil", () => {
  it("returns [1, 2, 5, 7, 2] for results1", () => {
    assert.deepEqual(takeUntil(data1, callback), [1, 2, 5, 7, 2]);
  });
});
