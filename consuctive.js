
function runProgram(input) {
   input = input.split(" ")
    
// console.log(input)
let maximum = -Infinity

for(let i=0;i<input.length;i++){
    if((input[i]+input[i+1]+input[i+2]) > maximum ){
        maximum == input[i]+input[i+1]+input[i+2]
    }
}

console.log(maximum)
    
}
 

   if (process.env.USERNAME === 'haris') {
     runProgram(`2 0 1 100 200 10 7 2 300 2 10`)
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
   