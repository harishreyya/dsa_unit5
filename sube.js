function subsequnce(str1,str2){
    let i = 0;
    let j = 0;
    while(i<str2.length&&j<str1.length){
        if(str1[j]==str2[i]){
         
         
        } if(j==str1.length){
                
      return "YES"
            }
        }
        return "NO"
}


function runProgram(input) {
    input = input.trim().split("\n");
    let test = +input[0];
    let line = 1;
   
    for(a=0;a<test;a++){
        let str1 = input[line++].trim().split("");
        let str2 = input[line++].trim().split("");
      console.log(subsequnce(str1,str2))

   }
    
   }
   
   if (process.env.USERNAME === 'haris') {
     runProgram(`2
     abc
     adbce
     ax
     xaa
     `);
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
   
   