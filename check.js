
function runProgram(input) {
    input = input.trim().split("\n");

 let str = input[0].trim().split("")
let res = ""
 let i = str.length-1;
 while(i>=0){
res += str[i]
i--;
 }
console.log(res)
//   // 0 0 0 0 1 1 2 3 4 4
// let newarr = [];

// for(a=0;a<arr.length;a++){
//   newarr.push(arr[a])
// }
// newarr.sort((a,b)=>(a-b))

// let good =[];
// let bad = [];
// for(i=0;i<arr.length;i++){
//   if(arr[i]===newarr[i]){
//     good.push(arr[i])
//   }else{
//     bad.push(arr[i])
//   }
// }
// let gsum = 0;
// let bsum = 0;
// // console.log(good,bad)
// for(b=0;b<good.length;b++){
// gsum+= good[b]
// }
// for(c=0;c<bad.length;c++){
//   bsum+= bad[c]
//   }
// console.log(gsum - bsum)


} 
   if (process.env.USERNAME === 'haris') {
     runProgram(`abcd`)
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
   

   