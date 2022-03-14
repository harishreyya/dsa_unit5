function prod(arr){
    let prod = 1;
    let arr11 = [];
    for(let i=0;i<arr.length;i++){
        prod*=arr[i]
    }
   
    // console.log(arr11)

    for(let i = 0;i<arr.length;i++){
        arr11.push(prod/arr[i])
    }
    console.log(arr11)
}




function runProgram(input) {
   input = input.trim().split("\n");
   let test = +input[0];
   let line = 1;
   for(i=0;i<test;i++){
let n = +input[line++];
let arr = input[line++].trim().split(" ").map(Number);

prod(arr)



   }
    

    
}
 

   if (process.env.USERNAME === 'haris') {
     runProgram(`2
     5
     1 2 3 4 5
     3
     3 2 7`)
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
   