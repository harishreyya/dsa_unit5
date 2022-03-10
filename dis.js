
function runProgram(input) {
   
    input = input.trim().split("");
    let count = 1;
    let res = ""
    for(i=0;i<input.length;i++){
        if(input[i]!=="a" ||input[i]!== "e" ||input[i]!=="i" ||input[i]!== "o" ||input[i]!== "u" ){
           res+=input[i]
    }
}
    console.log(res)
}
 

   if (process.env.USERNAME === 'haris') {
     runProgram(`harish`)
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
   