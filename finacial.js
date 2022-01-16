function runProgram(input) {
    input = input.trim().split("\n");
let test = +input[0];
let line = 1;
for(i=0;i<test;i++){
    let size = +input[line++];
    let arr = input[line++].trim().split(" ").map(Number);
   
}



 
}
   
   if (process.env.USERNAME === 'haris') {
     runProgram(`1
     6
     100 60 70 65 80 85 `)
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
   