function flowerinsert(size,arr,insert){
   
    for(a=0;a<arr.length;a++){
    if(arr[a]!==1 && arr[a-1]!==1 && arr[a+1]!==1){
        arr[a]=1
        insert--;
    }
    if(insert==0){
        return "Yes"
    }
    }
    return "No"
}
function runProgram(input) {
   input = input.trim().split("\n")
let test = +input[0];
let line = 1;
for(i=0;i<test;i++){
    let [size,insert] = input[line++].trim().split(" ").map(Number);
    let arr = input[line++].trim().split(" ").map(Number);

console.log(flowerinsert(size,arr,insert))
   // console.log(test,size,insert,arr)

  
}


    
}
 

   if (process.env.USERNAME === 'haris') {
     runProgram(`1
     5 1
     1 0 1 0 1`)
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
   