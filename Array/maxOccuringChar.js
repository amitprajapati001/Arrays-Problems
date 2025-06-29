function maxOccur(str) {
  let arr = Array(26).fill(0);
  for (let i = 0; i < str.length; i++) {
    let char = str.charCodeAt(i) - "a".charCodeAt(0);
    arr[char]++;
  }
  let max = -1;
  let ans = 0;
  for (let i = 0; i < 26; i++) {
    if (max < arr[i]) {
      max = arr[i];
      ans = i;
    }
  }
  let finalAnswer = ans + "a".charCodeAt(0);
  return String.fromCharCode(finalAnswer);
}

let str = "output";
console.log(maxOccur(str));
