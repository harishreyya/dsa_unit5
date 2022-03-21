
function runProgram(input) {
   input = input.trim().split("\n");
   let size = +input[0];
   let arr = input[1].trim().split(" ").map(Number);
   let indice = []
    for(i=0;i<arr.length;i++){
indice.push(i)
    }

    let res = arr.sort((a,b)=>(a-b));
    console.log(res)

    
}
 

   if (process.env.USERNAME === 'haris') {
     runProgram(`5
     4 5 3 7 1`)
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
   