/* eslint-disable no-param-reassign */
const clearArr = (arr) => {
  arr.splice(0, arr.length);
};

const getFirstItem = (array) => {
  return array[0];
};

module.exports = {
  clearArr,
  getFirstItem,
};
