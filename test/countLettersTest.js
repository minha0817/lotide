const countLetters = require("../countLetters");
const assert = require("chai").assert;

describe("#countLetters", () => {
  it("returns { H: 1, e: 1, l: 2, o: 1 } for 'Hello' ", () => {
    assert.deepEqual(countLetters("Hello"), { H: 1, e: 1, l: 2, o: 1 });
  });
});
