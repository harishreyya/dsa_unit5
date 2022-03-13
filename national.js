
    function dutch(arr,n) {
             let lo = 0, mid = 0, hi = n-1;
             while(mid <= hi) {
                    if(arr[mid] == 0) {
                        temp = arr[lo];
                        arr[lo] = arr[mid];
                        arr[mid] = temp;
                        lo++;
                        mid++;
                    } else if(arr[mid] == 1) {
                        mid++;
                    } else { 
                        temp = arr[mid];
                        arr[mid] = arr[hi];
                        arr[hi] = temp;
                        hi--;
                    }
                     
                }
                return arr.join(" ")
             }


             function runProgram(input) {
                input = input.trim().split("\n")
                let test = +input[0]
                let line = 1;
                for( i = 0; i < test; i++) {
                    let n = +input[line++]
                    let arr = input[line++].trim().split(" ").map(Number)
                  console.log(dutch(arr,n) )
                }
                }
    
    if (process.env.USERNAME === "haris") {
      runProgram(`3
      1
      2
      3
      2 0 1
      4
      2 0 2 1`);
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