
function runProgram(input) {
   input = input.trim().split("\n");
   let arr = input[0].trim().split(" ").map(Number);
   let q = input[1].trim().split(" ").map(Number)

let res = []
let i = 0;
while(i<q.length){
    for(j=0;j<arr.length;j++){
        if(q[i]==arr[j] && j==(arr.length/2)){
       res.push(0)
        }else if(q[i]==arr[j] && j<(arr.length/2)){
            res.push(1)
        }else{
            res.push(2)
        }
    }
    i++;
}
  console.log(res)  
}
 

   if (process.env.USERNAME === 'haris') {
     runProgram(`47 64 68 73 0 32 19 72 59
     73 47 68 59 47 64 47 72`) //1, 1, 1, 2, 1, 1, 1, 2
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
   