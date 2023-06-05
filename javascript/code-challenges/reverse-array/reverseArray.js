'use strict';
  
  function reversedArray(arr){
    let x;
    let lastElement=arr.length-1
    let firstElement=0
    while(firstElement<=lastElement){
          x=arr[lastElement]
          arr[lastElement]=arr[firstElement]
          arr[firstElement]=x;
          lastElement--
          firstElement++
    }
    return arr
    }
    
module.exports = reversedArray;


  