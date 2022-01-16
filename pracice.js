function runProgram(input) {
    input = input.trim().split("\n");
 let str = input[0].trim().split(" ");

// console.log(str)


   }

   
   if (process.env.USERNAME === 'haris') {
     runProgram(`Practice makes perfect. you'll only get Perfect by practice. just practice!`);
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
   