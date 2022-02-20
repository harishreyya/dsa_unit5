function show(str1,str2){
    // let i = 0;
    // let j = 0;

    // while(i<str1.length && j<str2.length){
    //     if(str1[i]==str2[j]){
    //         i++;
    //         j++;
    //     }else{
    //         return str2[j]
    //     }
    // }

    for(i=0;i<str1.length;i++){
        if(str1[i]!=str2[i]){
            return str2[i]
        }
    }
}
function runProgram(input) {
   input = input.trim().split("\n")
   let str1 = input[0].trim().split("")
   let str2 = input[1].trim().split("")

     console.log(show(str1,str2))
    
}
 

   if (process.env.USERNAME === 'haris') {
     runProgram(`abc
     abx`)
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
   