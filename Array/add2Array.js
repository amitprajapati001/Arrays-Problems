function reverse(arr) {
  let i = 0;
  let j = arr.length - 1;
  while (i <= j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;
    j--;
  }
  return arr;
}

function addArrays(arr1, arr2) {
  let ans = [];
  let i = arr1.length - 1;
  let j = arr2.length - 1;
  let carry = 0;

  while (i >= 0 && j >= 0) {
    let val1 = arr1[i];
    let val2 = arr2[j];
    let sum = val1 + val2 + carry;
    carry = Math.floor(sum / 10);
    sum = sum % 10;
    ans.push(sum);
    i--;
    j--;
  }
  while (i >= 0) {
    let sum = arr1[i] + carry;
    carry = Math.floor(sum / 10);
    sum = sum % 10;
    ans.push(sum);
    i--;
  }
  while (j >= 0) {
    let sum = arr2[j] + carry;
    carry = Math.floor(sum / 10);
    sum = sum % 10;
    ans.push(sum);
    j--;
  }

  while (carry !== 0) {
    sum = carry;
    carry = Math.floor(sum / 10);
    sum = sum % 10;
    ans.push(sum);
  }
  let finalAnswer = reverse(ans);
  return finalAnswer;
}

let arr1 = [1, 2, 3, 4];
let arr2 = [6];

console.log(addArrays(arr1, arr2));
