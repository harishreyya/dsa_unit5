function runProgram(input) {
    input = input.trim().split("\n")
    let Str = input[0].trim().split("")
 
   MasaiPalindrome(Str)
}
function MasaiPalindrome(Str) {
   let maxi_length = 1, start = 0;
  
   for(let i = 0; i < Str.length; i++) {
       for(let j = i; j < Str.length; j++) {
                let flag = 1;
      
                for (let k = 0; k < (j - i + 1) / 2; k++)
                    if (Str[i + k] != Str[j - k])
                        flag = 0;
      
                //....... Palindrome
            if (flag!=0 && (j - i + 1) > maxi_length) {
                    start = i;
                    maxi_length = j - i + 1;
       }
       
   }
}
             console.log(maxi_length)
       }
    if (process.env.USERNAME === "haris") {
      runProgram(`thisracecarisgood`);
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