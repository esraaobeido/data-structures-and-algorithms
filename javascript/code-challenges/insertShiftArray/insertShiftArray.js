function insertShiftArray(arr, X){
    let newArr = [];
    let mid = Math.ceil(arr.length / 2);
    for(let i = 0; i < arr.length + 1; i++) {
      if(i < mid) {
        newArr[i] = arr[i];
      }
      if(i === mid) {
        newArr[i] = X;
      }
      else if(i > mid) {
        newArr[i] = arr[i - 1];
      }
    }
    return newArr;
  }



module.exports = insertShiftArray;
