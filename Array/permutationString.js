function permutation(s1, s2) {
  function areArraysEqual(str1, str2) {
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) return false;
    }
    return true;
  }
  let newArr = Array(26).fill(0);
  for (let i = 0; i <= s1.length - 1; i++) {
    let char = s1.charCodeAt(i) - 97;
    newArr[char]++;
  }
  let k = 0;
  let e = s1.length - 1;
  let ans = false;
  while (e <= s2.length) {
    let newArr1 = Array(26).fill(0);
    for (let i = k; i <= e; i++) {
      let char = s2.charCodeAt(i) - 97;
      newArr1[char]++;
    }
    if (areArraysEqual(newArr, newArr1)) return true;
    k++;
    e++;
  }
  return ans;
}

let s1 = "ab";
let s2 = "eidbaooo";
console.log(permutation(s1, s2));
