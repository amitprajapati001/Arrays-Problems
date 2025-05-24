// function reverse(arr) {
//     let reversedArray=[];
//   for (let i = arr.length-1; i >= 0; i--) {
//     reversedArray.push(arr[i])
//   }

//   return reversedArray;
// }

// let arr = [2, 7, 1, -4, 11];
// console.log(reverse(arr));



function reverse(arr) {
    let reversedArray=[];
  for (let i = arr.length-1; i >= 0; i--) {
    reversedArray.push(arr[i])
  }

  return reversedArray;
}

let arr = [2, 7, 1, -4, 11];
console.log(reverse(arr));