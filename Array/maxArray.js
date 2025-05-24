function maxArray(arr) {
    let max = arr[0] 
    for (let i = 0; i < arr.length; i++) {
      // console.log(arr[i])
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }
  
  let arr = [-3, -5, -6, -1, -4,-8,0];
  console.log(maxArray(arr));