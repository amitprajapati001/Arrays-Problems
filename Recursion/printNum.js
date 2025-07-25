function printNum(num){
    if(num===0) return;
    console.log(num);
    num=num-1;
    printNum(num)

}
let a=5;
printNum(a)