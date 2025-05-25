function duplicateArray(arr){
    let result = new Set();
    for(let i=0;i<arr.length;i++){
        if(result.has(arr[i])) {
            return arr[i];
        }
        result.add(arr[i]);
    }
    return null;
}

let arr1=[5, 3, 4, 2, 7, 8, 9, 5];
console.log(duplicateArray(arr1)); 
