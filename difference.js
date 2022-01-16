function runProgram(input) {
    input = input.trim().split("\n");
 let test = +input[0];
 let line = 1;
 for(i=0;i<test;i++){
     let [N,K] = input[line++].trim().split(" ").map(Number);
     let arr = input[line++].trim().split(" ").map(Number);
let count = 0;
let a = 0;
let b = 0;

while(a< arr.length && b < arr.length){
    let diff = Math.abs(arr[b] - arr[a])
    if(diff > K){
        a++;
    }else if(diff < K){
        b++;
    }else {
        a++;
        b++;
        count++;
    }
}
if(count> 0){
    console.log("Yes")
}else{
    console.log("No")
}
}


 
}
   
   if (process.env.USERNAME === 'haris') {
     runProgram(`2
     5 3
     1 2 3 4 5
     5 8
     1 2 3 4 5 `)
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
   