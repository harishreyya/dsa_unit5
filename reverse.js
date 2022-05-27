
function runProgram(input) {
   
    input = input.trim().split("")
let string = "";
    for(i=input.length-1;i>=0;i--){
        string +=input[i]
    }
console.log(input.reverse().join(""))
    console.log(string)
}
 

   if (process.env.USERNAME === 'haris') {
     runProgram(`azdbas`)
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
   