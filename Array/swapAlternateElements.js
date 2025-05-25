function swap(arr){
     let temp;
     console.log(arr.length-1)
     for(let i=0;i<arr.length-1;i+=2){
          temp=arr[i];
          arr[i]=arr[i+1];
          arr[i+1]=temp;
     }
     return arr;
}
// let arr1=[2,1,7,8,5]
let arr2=[2,1,7,8,5,8,9,2]
console.log(swap(arr2))