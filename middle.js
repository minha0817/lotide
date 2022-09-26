//case 1: arr.length > 2
//case 2: arr.length is even number then
//return middle-most elements as an new array
//case 3: arr.length is odd number then
//return the middle elements as an new array
//delare new arr [] -> push elements into it
// let middleElement = arr[Math.floor(arr.length / 2)];

const middle = function(arr) {
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
  return midArr;
};

module.exports = middle;
