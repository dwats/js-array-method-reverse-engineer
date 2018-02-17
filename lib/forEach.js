// ./lib/forEach.js
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

// array.forEach(...);
// forEach(array, ...);


/**
 * Executes a provided function once for each array element.
 * @param {Array} arr
 * @param {Function} cb
 * @param {Object} thisArg
 */
function forEach(arr, cb, thisArg) {

  if (!Array.isArray(arr)) {
    throw new TypeError(`$arr is not an array`);
  }

  if (typeof cb !== 'function') {
    throw new TypeError(`${cb} is not a function`);
  }

  const arrClone = [...arr];

  for (let i = 0; i < arrClone.length; i++) {
    cb(arrClone[i], i, arrClone);
  };

}

module.exports = {
  forEach
};
