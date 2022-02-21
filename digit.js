
function runProgram(input) {
   input = input.trim().split(" ");
   let num = input[0].trim().split("").map(Number);
let d = input[1].trim().split(" ").map(Number);
  // console.log(num,d)
let count = 0;
  for(i=0;i<num.length;i++){
      if(num[i]== d){
          count++;
      }
     
  }

  console.log(count++) 
}
 

   if (process.env.USERNAME === 'haris') {
     runProgram(`124577 4`)
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
   