
function runProgram(input) {
   input = input.trim().split("\n");
   let test = +input[0];
   let line = 1;
   for(i=0;i<test;i++){
   let n = +input[line++];
   let arr = input[line++].trim().split(" ").map(Number);

let obj ={};
   for(a=0;a<arr.length;a++){
if(obj[arr[a]]===undefined){
    obj[arr[a]]=1;
}else{
    obj[arr[a]]+=1;
}



   }

   for(let key in obj){
    //    console.log(obj[key])
    if(obj[key]==1){
        console.log(key)
    }
   }
   }
    

    
}
 

   if (process.env.USERNAME === 'haris') {
     runProgram(`2
     1
     5
     5
     1 2 1 3 2`)
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
   