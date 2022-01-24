function maximum(arr){
    let lo = 0;
    let hi = arr.length-1;
   
   while (lo < hi) {
       let mid = lo + Math.floor(hi - lo)/2;
       if(arr[lo] < arr[mid]) {
           lo = mid
       } else if(arr[lo] > arr[mid]) {
           hi = mid -1
       } else {
           lo = lo+1;
       }
   }
   return arr[lo]
}

function runProgram(input) {
    input = input.trim().split("\n");
 let size = +input[0];
 let arr = input[1].trim().split(" ").map(Number)
console.log(maximum(arr))

 
} 
   if (process.env.USERNAME === 'haris') {
     runProgram(`5
     6 7 8 1 4`)
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
   