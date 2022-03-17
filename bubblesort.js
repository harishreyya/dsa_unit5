
function runProgram(input) {
   input = input.trim().split(" ").map(Number);
  // int size //size of the array
 let  size = input.length
	//input Array
	for ( i=0;i<size - 1;i++){
	    for ( j=0;j<size - i - 1;j++){
		if (input[j] > input[j + 1]){ 
     
        input[j] = input[j+1]
        input[j+1] = input[j]
        }
        } console.log(input)  }  
    

    
}
 

   if (process.env.USERNAME === 'haris') {
     runProgram(`4 2 3 5 1 6 9`)
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
   