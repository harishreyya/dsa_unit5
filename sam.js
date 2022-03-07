
function runProgram(input) {
   
    input = input.trim().split("\n");
    let [ap1_c,or1_c,ap1_s,or1_s,ape_s,or_c] = input[0].trim().split(" ").map(Number);
    //console.log(ap1_c,or1_c,ap1_s,or1_s,ape_s,or_c)
console.log((ap1_c + ap1_s + ap1_c) - ape_s  ,  (or1_c+or1_s+or1_c) - or_c)
    
}
 

   if (process.env.USERNAME === 'haris') {
     runProgram(`10 20 20 10 15 44`)
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
   