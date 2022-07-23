// function runProgram(input) {
//  input = input.trim().split("\n");
//  let test = +input[0];
//  let line = 1;
//  for(i=0;i<test;i++){
//      let size = +input[line++];
//      let arr = input[line++].trim().split(" ").map(Number).sort((a,b)=>(a-b));
//   let j = arr[0];
//   for(a=1;a<arr.length;a++){
//       j = j^arr[a]
//   }
//   console.log(j)
    
//  }
// }

// if (process.env.USERNAME === 'haris') {
//   runProgram(`1
//   5
//   1 2 1 3 4 4 5 2 3`);
// } else {
//   process.stdin.resume();
//   process.stdin.setEncoding("ascii");
//   let read = "";
//   process.stdin.on("data", function (input) {
//     read += input;
//   });
//   process.stdin.on("end", function () {
//     read = read.replace(/\n$/, "");
//     read = read.replace(/\n$/, "");
//     runProgram(read);
//   });
//   process.on("SIGINT", function () {
//     read = read.replace(/\n$/, "");
//     runProgram(read);
//     process.exit(0);
//   });
// }
