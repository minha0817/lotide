const assertObjectsEqual = require("../assertObjectsEqual");
const assert = require("chai").assert;

describe("#assertObjectsEqual", () => {
  it("😱 Assertion Failed: { a: '1', b: 2 } !== { b: '2', a: '1' }", () => {
    assert.deepEqual(assertObjectsEqual(ab, ba));
  });
});

const ab = { a: "1", b: 2 };
const ba = { b: "2", a: "1" };
// const abc = { a: "1", b: "2", c: "3" };
