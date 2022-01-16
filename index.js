function runProgram(input) {
    input = input.trim().split("\n");
 let [size,K] = input[0].trim().split(" ").map(Number);
 let arr = input[1].trim().split(" ").map(Number);
let count = 0; 
let res = [];
 for(i=0;i<arr.length;i++){
     if(arr[i]==K){
       res.push(i)
       break;
     }else{
        count++;
     }
 }
 if(count == arr.length){
     console.log(-1)
 }else{
     console.log(res[0])
 }
   }

   
   if (process.env.USERNAME === 'haris') {
     runProgram(`6 6
     3 4 7 9 1 2`);
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
   