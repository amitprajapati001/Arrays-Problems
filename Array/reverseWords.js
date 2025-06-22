function reverseWords(arr) {
  let s = 0;
  let e = arr.length - 1;
  while (s <= e) {
    [arr[s], arr[e]] = [arr[e], arr[s]];
    s++;
    e--;
  }
  let start = 0;
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === " " || i === arr.length) {
      let t = i - 1;
      while (start <= t) {
        [arr[start], arr[t]] = [arr[t], arr[start]];
        t--;
        start++;
      }
      start = i + 1;
    }
  }
  return arr;
}

// const arr = ["h", "i", " ", "t", "h", "e", "r", "e"];
// output : ["t","h","e","r","e"," ","h","i"]

const arr = ["I", " ", "l", "o", "v", "e", " ", "J", "S"];

console.log(reverseWords(arr));
