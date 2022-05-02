function twoElementsWithSumK(arr, K){
	let left = 0
	let right = arr.length - 1
	 while (left < right){
	let	sum = arr[left] + arr[right]
	 	if (sum == K){
        break;
         	}	else if (sum > K){
        right --
    } else {
        left++
    }
  
     }
    return [left,right] 
}
function runProgram(input) {
   input = input.trim().split("\n");
   let arr = input[0].trim().split(" ").map(Number);
   let K = +input[1];
  console.log(twoElementsWithSumK(arr, K).join(" "))  
    
    
}
 

   if (process.env.USERNAME === 'haris') {
     runProgram(`2 7 11 15 16
     9`)
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
   