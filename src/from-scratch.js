const addToFrontOrBack = (arr, value, isTrue) => {
  if (isTrue) {
    arr.unshift(value);
  } else {
    arr.push(value);
  }
};

const reverseString = (str) => {
  return str.split('').reverse().join('');
};

const newArrayFullOf = (value, numOfValue) => {
  return new Array(numOfValue).fill(value);
};
console.log(newArrayFullOf("cool", 3));

const insertIntoMiddle = (arr, value) => {
  const middleIndex = Math.floor(arr.length / 2);
  arr.splice(middleIndex, 0, value);
};

const deleteFromMiddle = (arr) => {
  const indexMiddle = Math.floor(arr.length / 2);
  arr.splice(indexMiddle, 1);
};

const isRightIndex = (arr, value, index) => {
  return arr[index] === value;
};

const roundAllNumsDown = (arr) => {
  return arr.map(num => Math.floor(num));
};
const nums = [4.6, 2.9, 7.1];
const rounded = roundAllNumsDown(nums);

console.log(rounded);
console.log(nums);

const getAllYCoordinates = (arrOfCoords) => {
  return arrOfCoords.map(coord => coord[1]);
};
console.log(getAllYCoordinates([[1, 2], [3, 4], [5, 6]]));

module.exports = {
  addToFrontOrBack,
  reverseString,
  newArrayFullOf,
  insertIntoMiddle,
  deleteFromMiddle,
  isRightIndex,
  roundAllNumsDown,
  getAllYCoordinates,
};
