
function runProgram(input) {
    input = input.trim().split(" ").map(Number);
    console.log(input);
    let a=0;
   for(let i of input){
    a+=i;
   }
   console.log(a)
}
   if (process.env.USERNAME === 'haris') {
     runProgram(`1 2 3 4 5 6`)
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
   