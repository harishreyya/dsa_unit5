
function runProgram(input) {
   input = input.trim().split("\n");
   let arr = input[0].trim().split(" ").map(Number);
   let count = 0;
  

    
}
 

   if (process.env.USERNAME === 'haris') {
     runProgram(`1 5 3 2 6 9`)
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
   