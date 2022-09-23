//------------------assertEqual--------------------------//
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🥰 Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`😱 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

//-------------------findKey---------------------//
//takes (object, callback) as a parameter.
//scan the objects
//return the first key when the callback returns a truthy value.
//if there's no key, return undefined.

const findKey = function (keys, callback) {
  for (let key in keys) {
    if (callback(keys[key])) {
      return key;
    }
  }
};

//------------------input---------------------//
const result1 = findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 1
); // => "noma"

assertEqual(result1, "ora");
