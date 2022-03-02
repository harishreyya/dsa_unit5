
function runProgram(input) {
   input = input.trim().split("\n");
   let [n,k] = input[0].trim().split(" ").map(Number);
   let arr = input[1].trim().split(" ").map(Number)
    let count = []
   for(i=0;i<arr.length;i++){
    
    for(j=i;j<arr.length;j++){
       
        if(arr[i]+arr[j] == k){
            count.push(arr[i]+arr[j])
        }
        
         
    }
}
console.log(count.length)
}
 

   if (process.env.USERNAME === 'haris') {
     runProgram(`3 9
     2 3 5`)
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
   