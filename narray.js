
function runProgram(input) {
   input = input.trim().split("\n");
   let test = +input[0];
   let line = 1;
   for(i=0;i<test;i++){
       let num = +input[line++]

       let arr = [0,1,2,3,4,5,6,7,8,9]

       for(a=0;a<arr.length;a++){
           for(b=0;b<arr.length;b++){
               if(arr[a]**4 + arr[b]**4 == num){
                   console.log("1")
                   break;
               }else{
                   console.log("0")
               }
           }
       }
   }
    

    
}
 

   if (process.env.USERNAME === 'haris') {
     runProgram(`2
     55
     97`)
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
   