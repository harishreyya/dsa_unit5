function powerOfStr(N, str){
    //enter code here
    let x = 0;
    let y = 0;

    for(i=0;i<str.length;i++){
        if(str[i]==="a" ||str[i]==="e" ||str[i]==="i" ||str[i]==="o" ||str[i]==="u"){
        x++;
        }else{
            y++;
        }
    }
    console.log(5*x + 2*y)
    }
function runProgram(input) {
   input = input.trim().split("\n");
   let N = +input[0];
   let str = input[1].trim().split("");

   //console.log(str)
   powerOfStr(N, str)
 
}
 

   if (process.env.USERNAME === 'haris') {
     runProgram(`4
     aman`)
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
   