function tripletSum(arr, target) {
  let triplet = [];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length ; k++) {
        if (arr[i] + arr[j] + arr[k] == target) {
          triplet.push([arr[i], arr[j], arr[k]]);
        }
      }
    }
  }
  return triplet;
}

const arr = [1, 2, 3, 4, 5];
console.log(tripletSum(arr, 12));
