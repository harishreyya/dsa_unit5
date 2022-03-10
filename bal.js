
function runProgram(input) {
   input = input.trim().split("\n");
let str = input[0].split("")
   // console.log(str)
let arr = [];
for(i=0;i<str.length;i++){
    if(str[i]==="("){
        arr.push(str[i])
    }else if(str[i]===")"){
        if(arr[arr.length-1]==="("){
            arr.pop()
        
    }
}
    
}
 console.log(arr.length)
}
   if (process.env.USERNAME === 'haris') {
     runProgram(`))()()(`)
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
   