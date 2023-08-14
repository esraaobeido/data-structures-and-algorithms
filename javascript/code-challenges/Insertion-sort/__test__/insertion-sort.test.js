"use strict";

const insertionSort = require("../insertion-sort"); 

describe("insertionSort Function", () => {
  it("Can sort array of even size", () => {
    let arr = [5, 1, 4, 2, 0, -1];
    expect(insertionSort(arr)).toEqual([-1, 0, 1, 2, 4, 5]);
  });

  it("Can sort array of odd size", () => {
    let arr = [17, 10, -2, -55, 22, 100, 7];
    expect(insertionSort(arr)).toEqual([-55, -2, 7, 10, 17, 22, 100]);
  });

  it("Can sort an already sorted array", () => {
    let arr = [1, 2, 3, 4, 5, 6];
    expect(insertionSort(arr)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("Can sort an array with duplicate elements", () => {
    let arr = [3, 1, 2, 4, 1, 5, 3, 4, 2];
    expect(insertionSort(arr)).toEqual([1, 1, 2, 2, 3, 3, 4, 4, 5]);
  });

  it("Can sort a large array", () => {
    let arr = [];
    for (let i = 10000; i >= 1; i--) {
      arr.push(i);
    }
    expect(insertionSort(arr)).toEqual(Array.from({ length: 10000 }, (_, i) => i + 1));
  });
});
