function linearSearch(arr,element){
      for(let i =0; i<arr.length;i++){
        if(arr[i]===element) return "Element is present"
      }
      return "Element is not present"
}

let arr=[4,6,5,2,3,8]
console.log(linearSearch(arr,12))


