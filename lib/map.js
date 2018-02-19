// ./lib/map.js
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

/**
 * Creates a new array with the results of calling a provided function on every element in the calling array.
 * @param {Array} array
 * @param {Function} cb
 * @param {Object} thisArg
 */
function map(array, cb, thisArg) {

  if (!Array.isArray(array)) {
    throw new TypeError(`${array} is not an array`);
  }

  if (typeof cb !== 'function') {
    throw new TypeError(`${cb} is not a function`);
  }

  const returnArray = [];

  for (let i = 0; i < array.length; i++) {
    returnArray[i] = cb.call(thisArg, array[i], i, array);
  }

  return returnArray;
};

module.exports = {
  map
};
