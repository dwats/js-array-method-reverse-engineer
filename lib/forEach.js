// ./lib/forEach.js
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

/**
 * Executes a provided function once for each array element.
 * @param {Array} array
 * @param {Function} cb
 * @param {Object} thisArg
 */
function forEach(array, cb, thisArg) {

  if (!Array.isArray(array)) {
    throw new TypeError(`${array} is not an array`);
  }

  if (typeof cb !== 'function') {
    throw new TypeError(`${cb} is not a function`);
  }

  const arrClone = [...array];

  for (let i = 0; i < arrClone.length; i++) {
    cb.call(thisArg, arrClone[i], i, arrClone);
  }

}

module.exports = {
  forEach
};
