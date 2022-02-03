
function runProgram(input) {
    input = input.trim().split("\n");
let test = +input[0];
let line = 1;
let arr = [];
for(i=0;i<test;i++){
  let val = +input[line++];
  arr.push(val)
}


let maximum = 0;
let res = [];
for(i=0;i<arr.length;i++){
if(arr[i]>maximum){
  maximum = arr[i]
  
}
res.push(maximum)
}
  
  console.log(res[res.length-2])
}
 

   if (process.env.USERNAME === 'haris') {
     runProgram(`3
     10
     20
     30`)
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
   