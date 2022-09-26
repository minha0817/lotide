const assertArraysEqual = require("../assertArraysEqual");
const eqArrays = require("../eqArrays");

console.log("***** assertArraysEqual & eqArrays test code");
assertArraysEqual([1, 2, "3"], [1, 2, 3]);
assertArraysEqual(["b", "a", "d"], ["b", "a", "d"]);
