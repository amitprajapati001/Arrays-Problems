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

let arr = [0,1,2,2,2,4,5];
console.log(binarySearch(arr, 2));
