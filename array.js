function runProgram(input) {
    input = input.trim().split("\n");
    let element = input[0];
let arr = input[1].trim().split(" ").map(Number);


//console.log(element,arr)
let first = 0;
let last = arr.length;
let mid = (first+last)/2







}
 

   
   if (process.env.USERNAME === 'haris') {
     runProgram(`12
     5 12 30 40 80
     `)
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
   