function findDuplicates(arr,size){
    let s1 = 0;
    for(let i=0;i<arr.length;i++){
        s1+=arr[i]
    }
   let n = arr.length-1
    let s2 = (n*(n+1))/2
let ans = Math.abs(s1-s2)
    return ans
}


function runProgram(input) {
   input = input.trim().split("\n");
   let test = +input[0];
   let line = 1;
   for(i=0;i<test;i++){
       let size = +input[line++];
       let arr = input[line++].trim().split(" ").map(Number);

console.log(findDuplicates(arr))

    }
//     function findDuplicates(int[] array)
// 	S1 = 0
// 	for (int i=0;i<array.length;i++) 
// 		S1 += array[i]
// 	n = array.length - 1
// 	S2 = [n * (n + 1)]/2
// 	int ans = S1 - S2
// 	return ans

    
}
 

   if (process.env.USERNAME === 'haris') {
     runProgram(`2
     1
     5
     5
     1 3 3 2 4`)
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
   