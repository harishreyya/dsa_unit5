
function runProgram(input) {
  let even = 0;
  let odd = 0;
  var count = 0;
for(let i=1;i<=11;i++){
if(i%2==0){
  even++
}else{
  odd++
}

}
if(even===odd && even!=0 && odd!=0){
  count++
}
    

    console.log(count)
}
 

   if (process.env.USERNAME === 'haris') {
     runProgram(``)
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
   