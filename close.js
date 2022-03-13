function minAbsSumPair(arr, arr_size,k){

let l;
let  r;

let sum;
let res = [];

let min_l = 0;
let min_r = 1;

for(l = 0; l < arr_size - 1; l++)
{
for(r = l+1; r < arr_size; r++)
{
sum = arr[l] + arr[r];
if(Math.abs(k) > Math.abs(sum))
{
k = sum;
min_l = l;
min_r = r;
}
}
}

    console.log(arr[min_r])
}



function runProgram(input) {
   input = input.trim().split("\n");
   let test = +input[0];
   let line = 1;
   for(i=0;i<test;i++){
let [arr_size, k] = input[line++].trim().split(" ").map(Number)
let arr = input[line++].trim().split(" ").map(Number);

// console.log(arr_size,k,arr)
minAbsSumPair(arr, arr_size)
   }
    

    
}
 

   if (process.env.USERNAME === 'haris') {
     runProgram(`2
     4 1
     -1 2 1 -4
     3 1
     0 0 0`)
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
   