function intersection(arr1, arr2) {
  let j = new Set(arr1);
  let k = new Set(arr2);
  let newArr = [];
  for (const value of j) {
    if (k.has(value)) {
      newArr.push(value);
    }
  }
  return newArr;
}

let arr1 = [1, 2, 2, 2, 3, 4];
let arr2 = [2, 2, 3, 3];

console.log(intersection(arr1, arr2));

// TWO POINTER APPROACH

// function intersection(arr1, arr2) {
//   let i = 0;
//   let j = 0;
//   let newArr = [];

//   while (i < arr1.length && j < arr2.length) {
//     if (arr1[i] == arr2[j]) {
//       newArr.push(arr1[i]);
//       i++;
//       j++;
//     } else if (arr1[i] < arr2[j]) {
//       i++;
//     } else {
//       j++;
//     }
//   }

//   return newArr;
// }

// let arr1 = [1, 2, 2, 2, 3, 4];
// let arr2 = [2, 2, 3, 3];

// console.log(intersection(arr1, arr2));
