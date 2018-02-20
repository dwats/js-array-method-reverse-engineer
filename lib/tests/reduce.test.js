// ./lib/tests/reduce.test.js
const assert = require('assert');
const expect = require('expect');
const { reduce } = require('../reduce');

let testArray;

describe('reduce', () => {

  beforeEach(() => {
    testArray = [1, 2, 3, 4];
  });

  it('should be a function', () => {
    expect(typeof reduce).toBe('function');
  });

  it('should not mutate original array', () => {
    const original = [...testArray];
    reduce(testArray, (total, value) => total += value, 0);
    expect(testArray).toEqual(original);
  });

  it('should invoke callback exactly as many times as length of array', () => {
    let cbCount = 0;
    reduce(testArray, (a, v) => {
      cbCount += 1;
      return a += v;
    }, 0)
    expect(cbCount).toEqual(testArray.length);
  });

  it('should throw error when first argument is not an array', () => {
    expect(() => reduce()).toThrow(/is not an array/);
    expect(() => reduce('test', (value) => { return;})).toThrow(/is not an array/);
    expect(() => reduce({ name: 'test'}, (value) => { return;})).toThrow(/is not an array/);
  });

  it('should throw error when second argument is not a function', () => {
    expect(() => reduce(testArray, 'test')).toThrow(/is not a function/);
    expect(() => reduce(testArray, { name: 'test'})).toThrow(/is not a function/);
    expect(() => reduce(testArray)).toThrow(/is not a function/);
  });

  it('should throw an error if array is empty and no initialValue is given', () => {
    expect(() => reduce([], (a, v) => a += v));
  });

  it('should correctly reduce array', () => {
    let results = reduce(testArray, (a, v) => a += v, 0);
    expect(results).toEqual(10);
    results = reduce(testArray, (a, v) => a += v);
    expect(results).toEqual(11);
  });

});
