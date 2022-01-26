
function runProgram(input) {
    input = input.trim().split("\n");
 let test = +input[0];
 let line = 1;
 for(i=0;i<test;i++){
     let [N,target] = input[line++].trim().split(" ").map(Number)
 let arr = input[line++].trim().split(" ").map(Number)
let res = -1;

 for(a=0;a<arr.length;a++){
     if(arr[a]== target){
       res = a
     }
 }

 if(res == -1){
     console.log("Not Found")
 }else{
    console.log(res)
 }
 }
 
} 
   if (process.env.USERNAME === 'haris') {
     runProgram(`1
     7 40
     10 3 40 20 80 70 90`)
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
   