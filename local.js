

function runProgram(input) {
    input = input.trim().split("\n");
 let test = +input[0];
 let line = 1;
 for(i=0;i<test;i++){
     let size = +input[line++];
     let arr = input[line++].trim().split(" ").map(Number);

     //console.log(test,size,arr)
let count = 0;
     if(arr.length < 3){
         console.log(-1)
     }else {
 for(a=0;a<arr.length;a++){
     if(arr[a]> arr[a-1] && arr[a]>arr[a+1]){
         count++;
     }
 }
 console.log(count)
     }
 }
} 
   if (process.env.USERNAME === 'haris') {
     runProgram(`2
     2
     1 2
     10
     884 729 768 201 266 494 597 328 705 287`)
    } else {
     process.stdin.resume();
     process.stdin.setEncoding("ascii");
     let read = "";
     process.stdin.on("data", function (input) {
       read += input;
     });
     process.stdin.on("end", function () {
       read = read.replace(/\n$/, "");
       read = read.replace(/\n$/, "");
       runProgram(read);
     });
     process.on("SIGINT", function () {
       read = read.replace(/\n$/, "");
       runProgram(read);
       process.exit(0);
     });
   }
   