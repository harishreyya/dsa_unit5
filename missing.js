function runProgram(input) {
 input = input.trim().split("\n");
 let test = +input[0];
 let line = 1;
 for(i=0;i<test;i++){
     let arr = input[line++].trim().split(" ").map(Number);
//console.log(test,arr);
for (a=0;a<12;a++){
    if(arr[a]!=a){
        console.log(a);
        break;
    }
}
 }
}

if (process.env.USERNAME === 'haris') {
  runProgram(`2
  0 1 2 3 4 5 6 9 10 11 12 
  0 1 2 3 5 7 8 9 10 11 12`);
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
