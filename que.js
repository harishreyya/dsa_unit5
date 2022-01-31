

function runProgram(input) {
    input = input.trim().split("\n");
 let size = +input[0];
let arr = input[1].trim().split(" ").map(Number);
let count = 1;
for(i=0;i<arr.length;i++){
    if(arr[i] > arr[i+1] ){
     count++

}
}
console.log(count)
 
} 
   if (process.env.USERNAME === 'haris') {
     runProgram(`6
     1 2 4 3 5 8`)
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
   