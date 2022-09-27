const assertEqual = require("../assertEqual");
const assert = require("chai").assert;

describe("#assertEqual", () => {
  it("returns 'Minha' for 'Minha'", () => {
    assert.strictEqual(assertEqual("Minha", "Minha"));
  });
});
