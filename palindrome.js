function checkPalindrome(str){
	left = 0 
	right = str.length-1;
	while(left <= right){
		if (str[left] != str[right]){
            return false
        }
         
		left++
	    right--
    }
        return true
    
}
function runProgram(input) {
   input = input.trim().split("\n");
   let str = input[0].trim().split("")
//console.log(str)
    console.log(checkPalindrome(str))

    
}
 

   if (process.env.USERNAME === 'haris') {
     runProgram(`masai`)
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
   