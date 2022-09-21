const eqArrays = function (arr1, arr2) {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
};

// if eqArrays is true, returns pass message.
// if eqArrays is false, returns fail message.
const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`🥰 Assertion Passed: [${arr1}] === [${arr2}]`);
  } else {
    console.log(`😱 Assertion Failed: [${arr1}] !== [${arr2}]`);
  }
};

assertArraysEqual([1, 2, "3"], [1, 2, 3]);

//case 1: arr.length > 2
//case 2: arr.length is even number then
//return middle-most elements as an new array
//case 3: arr.length is odd number then
//return the middle elements as an new array
//delare new arr [] -> push elements into it
// let middleElement = arr[Math.floor(arr.length / 2)];

const middle = function (arr) {
  const midArr = [];

  if (arr.length > 1 && arr.length % 2 !== 0) {
    let midElement = arr[Math.floor(arr.length / 2)];
    midArr.push(midElement);
  }

  if (arr.length > 2 && arr.length % 2 === 0) {
    const midNum = Math.floor(arr.length / 2);

    let midElement1 = arr[midNum - 1];
    midArr.push(midElement1);

    let midElement2 = arr[Math.floor(arr.length / 2)];
    midArr.push(midElement2);
  }
  return console.log(midArr);
};

middle([1]); // => []
middle([1, 2]); // => []
middle([1, 2, 3]); // => [2]
middle([1, 2, 3, 4, 5]); // => [3]
middle([1, 2, 3, 4]); // => [2, 3]
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]
