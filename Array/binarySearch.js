function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length-1;
  let mid = Math.floor(start + ((end - start) / 2));
  console.log(mid,end);
  while (start <= end) {
    if (arr[mid] == target) {
      return mid;
    }  else if (arr[mid] < target) {
      start = mid + 1;
    }
    else if (arr[mid] > target) {
      end = mid - 1;
    }

    mid=Math.floor(start + ((end - start) / 2));
  }

  return "Target does not exist"

}

let arr = [2, 5, 6, 8, 9, 11, 27];
console.log(binarySearch(arr, 1));
