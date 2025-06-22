function insSort(arr) {
  let sortedArr = [arr[0]]; 10
  for (let i = 1; i < arr.length; i++) {
    let inserted = true;
    for (let j = 0; j < sortedArr.length; j++) {
      if (arr[i] < sortedArr[j]) { 
        sortedArr.splice(j, 0, arr[i]);
        console.log(sortedArr)
        inserted = false;
        break;
      }
      console.log(j)
    }
    if (inserted) {
      sortedArr.push(arr[i]);
    }
  }
  return sortedArr;
}
let arr = [10, 4, 5, 8, 9, 6];
console.log(insSort(arr));

[10]
[4,5,10]
