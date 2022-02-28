function result(size,arr){
let square = arr.map(s=>{
    return s*s
})
//console.log(square)

for(b=0;b<arr.length;b++){
    
    for(c=0;c<arr.length-1;c++){
        if(square[c]>square[c+1]){
            var res = square[c]
            square[c]=square[c+1]
            square[c+1]=res

             res = arr[c]
            arr[c]=arr[c+1]
            arr[c+1]=res
        }
    }
}
return arr
}
function runProgram(input) {
   input=input.trim().split("\n")
let test = +input[0];
let line = 1;
for(i=0;i<test;i++){
    let size = +input[line++];
    let arr = input[line++].trim().split(" ").map(Number);
    result(size,arr)


}
    
}
 

   if (process.env.USERNAME === 'haris') {
     runProgram(`1
     5
     -2 3 1 -4 6
     `)
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
   