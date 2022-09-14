// function runProgram(input) {
//   input = input.trim().split("\n");
//   let test = input[0].trim();
//   let line = 1;
//   for(i=0;i<test;i++){
//     let str = input[line++].trim().split("").map(Number)
//   let even ="";
//   let odd = "";
//     // console.log(str)
//     for(i=0;i<str.length;i++){
//         if(str[i]%2==0){
//         even += str[i]
//             // even.push(str[i])
//         }else{
//             odd += str[i]
//        // odd.push(str[i])
//         }
//     }
//     let add = ""
//     for(let i = even.length-1; i >= 0; i--) {
// add += even[i]
//     }
//     odd += add
//     console.log(odd)
//   };






// }
 

   
//    if (process.env.USERNAME === 'haris') {
//      runProgram(`2
//      214365790
//      1234567890`)
//     } else {
//      process.stdin.resume();
//      process.stdin.setEncoding("ascii");
//      let read = "";
//      process.stdin.on("data", function (input) {
//        read += input;
//      });
//      process.stdin.on("end", function () {
//        read = read.replace(/\n$/, "");
//        read = read.replace(/\n$/, "");
//        runProgram(read);
//      });
//      process.on("SIGINT", function () {
//        read = read.replace(/\n$/, "");
//        runProgram(read);
//        process.exit(0);
//      });
//    }
//    var i = null;
//    var j = n
//    console.log(i===j)