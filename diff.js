
function runProgram(input) {
   input=input.trim().split("\n");
   let size = +input[0];
   let arr = input[1].trim().split(" ").map(Number)
let count_even=0;
let count_odd = 0;
   for(i=0;i<arr.length;i++){
       if(arr[i]%2===0){
           count_even++
       }else if(arr[i]%2===1){
           count_odd++
       }
   }

   console.log(Math.abs(count_odd-count_even))
    
}
 

   if (process.env.USERNAME === 'haris') {
     runProgram(`5
     1 2 3 4 5`)
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
   