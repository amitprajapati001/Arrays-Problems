function sortArr(arr) {
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    if (arr[i] == 0) {
      i++;
    } else if (arr[j] == 2 || arr[j] == 1) {
      j--;
    } else if ((arr[i] == 2 || arr[i] == 1) && arr[j] == 0) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
      j--;
    }
  }
  i = 0;
  j = arr.length - 1;
  while (i < j) {
    if (arr[i] == 1 || arr[i] == 0) {
      i++;
    } else if (arr[j] == 2) {
      j--;
    } else if (arr[i] == 2 && arr[j] == 1) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
      j--;
    }
  }

  return arr;
}
let arr = [0, 2, 2, 1, 0, 1, 1, 0, 2];
console.log(sortArr(arr));
