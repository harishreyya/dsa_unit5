
function runProgram(input) {
   input = input.trim().split("\n");
   let size = +input[0];
   let arr = input[1].trim().split(" ").map(Number);

   let odd = [];
   let even = [];
   for(i=0;i<arr.length;i++){
       if(arr[i]%2==0){
           even.push(arr[i])
       }else{
           odd.push(arr[i])
       }
   }
   odd.sort((a,b)=>(a-b))
   even.sort((a,b)=>(a-b))

 if(odd==[]){
     console.log(even.join(" "))
 }else if(even==[]){
    console.log(odd.join(" "))
 }else{
    console.log(odd.join(" ")+" "+even.join(" "))
 }
    
}
 

   if (process.env.USERNAME === 'haris') {
     runProgram(`5
     2 5 1 4 2 
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
   