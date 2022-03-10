function runProgram(input) {
    input = input.trim().split("\n")
    let test = +input[0]
    let line = 1;
    for(let a = 0; a < test; a++) {
        let size = +input[line++]
        let arr = input[line++].trim().split(" ").map(Number)
        let query = +input[line++]
   

     let even = "";
      let odd = "";
      for(let i = 0; i < arr.length; i++) {
          if(arr[i] % 2 === 0) {
              even +=  arr[i] + " "
          } else if(arr[i] % 2 !== 0){
              odd +=arr[i] + " "
          }

      }if(query == 1) {
    console.log(even + "" + odd)
      } else {
          console.log(odd + "" + even)
      }
     
    }
}


if (process.env.USERNAME === "haris") {
  runProgram(`2
  6
  1 3 5 2 7 4
  1
  6 
  1 3 5 2 7 4
  2`);
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