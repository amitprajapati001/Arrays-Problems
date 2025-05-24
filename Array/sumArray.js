function sum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }

  return sum;
}

let arr = [2, 7, 1, -4, 11];
console.log(sum(arr));
