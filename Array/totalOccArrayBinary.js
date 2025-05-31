function totalOccurence(arr, target) {
  function leftOcc(arr, key) {
    let s = 0;
    let e = arr.length - 1;
    let mid = Math.floor(s +( (e - s) / 2));
    let ans = 0;
    while (s <= e) {
      if (arr[mid] == key) {
        ans = mid;
        e=mid-1

      } else if (arr[mid] < key) {
        s = mid + 1;
      } else if (arr[mid] > key) {
        e = mid - 1;
      }
      mid = Math.floor(s +( (e - s) / 2));
    }

    return ans;
  }
   function rightOcc(arr, key) {
    let s = 0;
    let e = arr.length - 1;
    let mid = Math.floor(s +( (e - s) / 2));
    let ans = 0;
    while (s <= e) {
      if (arr[mid] == key) {
        ans = mid;
         s=mid+1

      } else if (arr[mid] < key) {
        s = mid + 1;
      } else if (arr[mid] > key) {
        e = mid - 1;
      }
      mid = Math.floor(s +( (e - s) / 2));
    }

    return ans;
  }
  let a = leftOcc(arr, target);
  let b=rightOcc(arr,target)
  
  let occ= (b-a)+1
  return occ
}

let arr = [1, 2, 3, 3, 3, 3, 5];
console.log(totalOccurence(arr, 3));
