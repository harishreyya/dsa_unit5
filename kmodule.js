
function runProgram(input) {
   input = input.trim().split("\n");
   let n = +input[0];
   let k = +input[1];
let arr = []
   for(let i=1;i<=n;i++){
       arr.push(i)
   }
 let divisors = []   
for(let j=0;j<arr.length;j++){
    if(arr[j]%k==0){
divisors.push(arr[j])
    }
}

let count = [];

console.log(divisors)
for(a=0;a<divisors.length;a++){
let odd = 0;
let even = 0;

 for(b=1;b<divisors[a];b++){
     if(b%2==0){
even++
     }else{
         odd++
     }
 }

 if(even==odd && odd!=0 && even!=0){
     count.push(1)
 }

}

 
console.log(count)

 
}
 

   if (process.env.USERNAME === 'haris') {
     runProgram(`15
     3`)
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
   