const eqObjects = require("./eqObjects");

const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect;
  console.log(`Example label: ${inspect(actual)}`);
  console.log(`Example label: ${inspect(expected)}`);
  if (eqObjects(actual, expected)) {
    console.log(
      `🥰 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
    );
  } else {
    console.log(
      `😱 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`
    );
  }
};

const ab = { a: "1", b: 2 };
const ba = { b: "2", a: "1" };
// const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, ba);

module.exports = assertObjectsEqual;
