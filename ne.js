
function runProgram(input) {
   
    input  = input.trim().split("\n");
    let test  = +input[0];
    let line = 1;
    for(i=0;i<test;i++){
        let size = +input[line++];
        let arr = input[line++].trim().split(" ").map(Number);
        for(i=0;i<arr.length;i++){
    arr[i]+= arr[i]
    console.log(arr[i])
        }
       console.log(size,arr) 
    }

    
}
 

   if (process.env.USERNAME === 'haris') {
     runProgram(`2
     5
     2 3 5 4 7
     3
     2 4 5`)
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
   