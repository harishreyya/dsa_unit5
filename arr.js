
function runProgram(input) {
    input = input.trim().split("\n");
    let [row,col] = input[0].trim().split(" ").map(Number);
    let line = 1;
    let minimum ;
    let res = []
    for(i=0;i<row;i++){
        let arr = input[line++].trim().split(" ").map(Number);
       
       
        for(i=0;i<arr.lenth;i++){
            if(arr[i]==1){
             
               break;
            }
        
    }
}
for(j=0;j<res.length;j++){
    if(res[j]<minimum){
minimum = res[j]
    }
}

    
    console.log(minimum)
}
 

   if (process.env.USERNAME === 'haris') {
     runProgram(`3 7
      0 0 0 0 1 1 1
0 0 1 1 1 1 1
0 0 0 0 0 0 0 `)
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
   