

function runProgram(input) {
    input = input.trim().split("\n");
   let test = +input[0];
   let line = 1;
   for(i=0;i<test;i++){
   let [X,Y,Z] = input[line++].trim().split(" ");
let count = 0;
let res = [];
for(a=0;a<X.length;a++){
    if(X[a]==Y[a]&&Y[a]==Z[a]){
        res.push(X[a]);
        count++;
    }else{
        break;
    }
}
if(count==0){
    console.log("None")
}else{
    console.log(res.join(""))
}

   }
} 
   if (process.env.USERNAME === 'haris') {
     runProgram(`1
     yrbrbyrbrybrbbr yrbbryrbb ybrrbyrbrybrbbr` 
     )} else {
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
   