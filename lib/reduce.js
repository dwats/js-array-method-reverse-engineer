// ./lib/reduce.js
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

function reduce(array, cb, initialValue) {

  if (!Array.isArray(array)) {
    throw new TypeError(`${array} is not an array`);
  }

  if (typeof cb !== 'function') {
    throw new TypeError(`${cb} is not a function`);
  }

  if (array.length === 0 && !initialValue && initialValue !== 0) {
    throw new TypeError('Reduce of empty array with no intial value');
  }

  let accumulator = array[0];
  if (initialValue || initialValue === 0) accumulator = initialValue;

  if (initialValue || initialValue === 0) {
    accumulator = initialValue
  };

  for (let i = 0; i < array.length; i++) {
    accumulator = cb(accumulator, array[i], i, array);
  }

  return accumulator;
}

module.exports = {
  reduce
};
