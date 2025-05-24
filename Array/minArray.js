function minArray(arr) {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i])
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

let arr = [-3, 5, 6, 1, 4, -8];
console.log(minArray(arr));
