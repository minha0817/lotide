const eqArrays = require("../eqArrays");
const assertEqual = require("../assertEqual");

console.log("***** assertEqual & eqArrays test code");
assertEqual(eqArrays([1, 2, "3"], [1, 2, 3]), true);
assertEqual(eqArrays(["a", "b", "c"], ["a", "b", "c"]), true);
