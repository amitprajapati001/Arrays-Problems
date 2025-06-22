function findPivot(arr) {
  let s = 0;
  let pivot = arr[0];
  let e = arr.length - 1;
  let mid = Math.floor(s + ((e - s) / 2));
  while (s < e) {
    if (arr[mid] >= pivot) {
      s = mid + 1;
    } else {
      e = mid;
    }
    mid = Math.floor(s + ((e - s) / 2));
  }
  return s;
}
let arr = [6, 7, 8, 1, 2, 3, 4, 5];
console.log(findPivot(arr));
