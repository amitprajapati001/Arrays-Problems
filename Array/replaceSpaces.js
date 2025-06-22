function replaceSpaces(str) {
  let result = "";
  for (let i = 0; i <= str.length - 1; i++) {
    if (str[i] === " ") {
      result = result + "@40";
    } else {
      result = result + str[i];
    }
  }
  return result;
}

let str = "Coding Ninjas Is A Coding Platform";
console.log(replaceSpaces(str));
