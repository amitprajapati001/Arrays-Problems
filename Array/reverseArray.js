// function reverse(arr) {
//     let reversedArray=[];
//   for (let i = arr.length-1; i >= 0; i--) {
//     reversedArray.push(arr[i])
//   }

//   return reversedArray;
// }

// let arr = [2, 7, 1, -4, 11];
// console.log(reverse(arr));



// function reverse(arr) {
//     let reversedArray=[];
//   for (let i = arr.length-1; i >= 0; i--) {
//     reversedArray.push(arr[i])
//   }

//   return reversedArray;
// }

// let arr = [2, 7, 1, -4, 11];
// console.log(reverse(arr));


function reverse(arr,m) {
  let i=m+1;
  let j=arr.length-1
  while(i<=j){
    [arr[i],arr[j]]=[arr[j],arr[i]]
    i++;
    j--;
  }
return arr;
}
let arr = [10, 9 ,8 ,7,6];
console.log(reverse(arr,2));