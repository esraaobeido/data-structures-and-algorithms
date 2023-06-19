function binarySearch(arr, searchKey) {
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (arr[mid] === searchKey) {
        return mid;
      } else if (arr[mid] < searchKey) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    return -1;
  }
  module.exports = binarySearch;
