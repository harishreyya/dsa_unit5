
function runProgram(input) {
   input = input.trim().split("\n");
//    let size = +input[0];
   let arr = input[0].trim().split(" ").map(Number);
  console.log(arr)
//   let ans = []
//    for(i=0;i<arr.length;i++){
//      let res = "";
//      let maximum= "";
//      res += arr[i]
//      for(j=0;j<res.length;j++){
//          maximum+= res[j]
         
//      }
//     //  ans.push(maximum)
//    }
    
// console.log(ans)

let sum = 0;
for(i=0;i<arr.length;i++){
    let res =  arr[i].split(" ");
}
console.log(res)
    
}
 

   if (process.env.USERNAME === 'haris') {
     runProgram(`43 56`)
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
   