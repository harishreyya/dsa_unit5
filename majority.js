function runProgram(input) {
    input = input.trim().split("\n")
    var testcases = Number(input[0])
    var line = 1
    for(var i = 0; i < testcases; i++) {
        var N = Number(input[line++])
        var arr = input[line++].trim().split(" ").map(Number).sort((a,b)=>(a-b))
        //console.log(N,arr)
        console.log(majarity(arr,N))
    }
    }
    function majarity(arr,N) {
     for(var i =  0; i <= Math.floor(N/2); i++) {
         if(arr[i] === arr[i + Math.floor(N/2)]) {
             return arr[i]
         } else {
             return -1
         }
     }
    }
    if (process.env.USERNAME === "haris") {
      runProgram(`2
      6
      1 1 1 1 2 3
      5
      1 1 2 2 3`);
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






// function maj(n,arr){
//     for(i=0;i<=Math.floor(n/2);i++){
//         if(arr[i]===arr[i + Math.floor(n/2)]){
//        return arr[i]
//          } else{
// return -1
//       }
       
//     }
// }
// function runProgram(input) {
//    input = input.trim().split("\n");
//    let test = +input[0];
//    let line = 1;
//    for(i=0;i<test;i++){
//        let n = +input[line++]
//        let arr = input[line++].trim().split(" ").map(Number).sort((a,b)=>(a-b))
// console.log(maj(n,arr))
// console.log(test,n,arr)
       
//    }
    

    
// }
 

//    if (process.env.USERNAME === 'haris') {
//      runProgram(`2
//      6
//      1 1 1 1 2 3
//      5
//      1 1 2 2 3`)
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
   