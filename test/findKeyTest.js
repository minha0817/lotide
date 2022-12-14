const findKey = require("../findKey");
const assert = require("chai").assert;

const result = {
  "Blue Hill": { stars: 1 },
  Akaleri: { stars: 3 },
  noma: { stars: 2 },
  elBulli: { stars: 3 },
  Ora: { stars: 2 },
  Akelarre: { stars: 3 },
};

const callback = (x) => x.stars === 1;

describe("#findKey", () => {
  it("returns 'Blue Hill' for this case", () => {
    assert.deepEqual(findKey(result, callback), "Blue Hill");
  });
});
