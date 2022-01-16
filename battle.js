function runProgram(input) {
    input = input.trim().split("\n");
 let size = +input[0];
 let arr = input[1].trim().split(" ").map(Number);
// console.log(size,arr)
let even = [];
let odd = [];
let sum_odd = 0;
let even_sum = 0;
for(i=0;i<arr.length;i++){
    if(arr[i]%2==0){
    even.push(arr[i])
    }else if(arr[i]%2 == 1){
odd.push(arr[i])
    }
}
for(j=0;j<odd.length;j++){
    sum_odd += odd[j]
}
for(k=0;k<even.length;k++){
    even_sum += even[k]
}
if(sum_odd > even_sum){
    console.log("Odd")
}else{
    console.log("Even")
}

   }

   
   if (process.env.USERNAME === 'haris') {
     runProgram(`4
     5 2 3 4`)
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
   