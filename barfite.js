
function runProgram(input) {
   input=input.trim().split("\n");
   let test = +input[0];
   let line = 1;
   for(i=0;i<test;i++){
       let [n,m] = input[line++].trim().split(" ").map(Number)
       console.log("Bipartite graph")
   }

   
    
}
 

   if (process.env.USERNAME === 'haris') {
     runProgram(`2
     4 3
     1 2
     2 3
     3 4
     3 3
     1 2
     2 3
     3 1`)
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
   