
function runProgram(input) {
    input = input.trim().split("\n");

let arr = input[0].trim().split(" ").map(Number)
// console.log(arr)
  // 0 0 0 0 1 1 2 3 4 4
let newarr = [];

for(a=0;a<arr.length;a++){
  newarr.push(arr[a])
}
newarr.sort((a,b)=>(a-b))

let good =[];
let bad = [];
for(i=0;i<arr.length;i++){
  if(arr[i]===newarr[i]){
    good.push(arr[i])
  }else{
    bad.push(arr[i])
  }
}
let gsum = 0;
let bsum = 0;
// console.log(good,bad)
for(b=0;b<good.length;b++){
gsum+= good[b]
}
for(c=0;c<bad.length;c++){
  bsum+= bad[c]
  }
console.log(gsum - bsum)
} 
   if (process.env.USERNAME === 'haris') {
     runProgram(`0 4 0 0 1 3 4 1 0 2`)
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
   

   