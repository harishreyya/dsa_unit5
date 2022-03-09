
function runProgram(input) {
   
    input = input.trim().split("\n");
    let [w , c] = input[0].trim().split(" ").map(Number);
    console.log(w,c)
    if(c == 101 && w < 58 ){
console.log(58-w,Chicago)
    } if(c == 101 && w > 58 ){
        console.log(58-w,Chicago)
            }

}
 

   if (process.env.USERNAME === 'haris') {
     runProgram(`55.50 101`)
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
   