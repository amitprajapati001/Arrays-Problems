function sortArr(arr) {
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    if (arr[i] == 0) {
      i++;
    } else if (arr[j] == 1) {
      j--;
    } else if (arr[i] == 1 && arr[j] == 0) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
       i++;
       j--;
    }
  }
  return arr;
}
let arr = [1,1,0,0,0,0,1,0];
console.log(sortArr(arr));
