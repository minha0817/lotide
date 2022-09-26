const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🥰 Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`😱 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const eqArrays = function (arr1, arr2) {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
};

const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  //if obj1 & obj2's key value are same, return true
  //if not return falsec//[]

  // ["c", "d"]
  for (let key of Object.keys(object1)) {
    // console.log("object1[key]:", object1[key]); //1
    // console.log("object2[key]:", object2[key]); //3
    // if (object1[key] !== object2[key]) {
    //   return false;
    // }
    // console.log("Array.isArray(object2[key]:", Array.isArray(object2[key]));
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      // If this is true, then it exits out of the function and returns true.
      // It doesn't test the rest.
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    }

    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "3" };
const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(dc, cd), true);
assertEqual(eqObjects(cd, cd2), false);
