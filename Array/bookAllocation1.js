
function countStudents(arr,pages){
      let student=1;
      var pagesStudent=0;
      [25, 46, 28, 49, 24]; 
      for(let i=0;i<arr.length;i++){
           if((pagesStudent+arr[i]) <= pages){ 71 
                  pagesStudent=pagesStudent+arr[i] 
                  student=1;
           }
           else{
               student++;
               console.log(student)
               pagesStudent=arr[i]
               console.log(pagesStudent,"pagesStudent")
           }
      }
      return student;
}
function findPages(arr,n,m){
    let low =Math.max(...arr);
    let high=0;
    for(let i=0;i<arr.length;i++){
          high= high+arr[i]
    }
    for(let j=low;j<=high;j++){
          if(countStudents(arr,j)===m){
              return j
          }
    }   
    return low
}
var arr = [25, 46, 28, 49, 24];    71 
var n = 5;              
var m = 4;
var ans = findPages(arr, n, m);
console.log("The answer is: " + ans);
