function tribonnaci(N){
    if(N==0){
    return 0
    }

    if(N==1 || N==2){
        return 1
    }else{
        return tribonnaci(N-1)+tribonnaci(N-2)+ tribonnaci(N-3)
    }
}


function runProgram(input) {
    input = input.trim().split("\n");
let test = +input[0];
let line = 1;
for(i=0;i<test;i++){
    let N = +input[line++]
    console.log(tribonnaci(N))

}

}
 

   if (process.env.USERNAME === 'haris') {
     runProgram(`1
     4`)
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
   