
function runProgram(input) {
    input = input.trim().split("\n");
let size = +input[0];
let gas = input[1].trim().split(" ").map(Number);
let cost = input[2].trim().split(" ").map(Number);


}
 

   if (process.env.USERNAME === 'haris') {
     runProgram(`5
     1 2 3 4 5
     3 4 5 1 2`)
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
   