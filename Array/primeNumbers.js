/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  if (n === 0 && n == 1) return 0;
  let count = 0;
  while (n >= 2) {
    console.log(Math.floor(n / 2),n)
    for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) {
        count++;
      }
    }
    n--;
  }
  return count;
};

let n = 2;
console.log(countPrimes(n));
