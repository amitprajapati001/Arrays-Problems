/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  let pos = 0;
  let count = 1;

  for (let i = 1; i <= chars.length; i++) {
    if (chars[i] === chars[i - 1]) {
      count++;
    } else {
      chars[pos] = chars[i - 1];
      pos = pos + 1;
      if (count > 1) {
        let str = count.toString();
        for (let ch of str) {
          chars[write++] = ch;
        }
      }
      count = 1;
    }
  }
  return pos;
};

// /**
//  * @param {character[]} chars
//  * @return {number}
//  */
// var compress = function(chars) {

//     let arr=[chars[0]]
//     let count=1

//     for(let i=1;i<=chars.length;i++){
//           if(chars[i]===chars[i-1]){
//                count++;
//           }
//           else{
//             if(arr[arr.length-1]!==chars[i-1]){
//                 arr.push(chars[i-1])
//             }

//                if(count>1){
//                    arr.push(count)
//                }
//                if(chars[i]){
//                  arr.push(chars[i])
//                }
//                count=1;
//           }
//     }
//     console.log(arr)
//      return arr;

// };
