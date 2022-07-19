function runProgram(input) {
    let n = input.trim().split("")
    // console.log(n)
    for(i=0;i<n;i++){
        
    }
   }
   
   if (process.env.USERNAME === 'haris') {
     runProgram(`4`);
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
   