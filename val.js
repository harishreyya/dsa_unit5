
function runProgram(input) {
    input = input.trim().split("\n");
let [size,query] = input[0].trim().split(" ").map(Number);
let arr = input[1].trim().split(" ").map(Number);
let line = 2;
for(i=0;i<query;i++){
    let [left,right,value] =  input[line++].trim().split(" ").map(Number);
    //console.log(size,query,arr,left,right,value)
    let count = 0;
   
}
 
} 
   if (process.env.USERNAME === 'haris') {
     runProgram(`6 2
     1 5 3 2 3 2 
     3 6 2
     4 4 2
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
   