function runProgram(input) {
    input = input.trim().split("\n");
    var test = +input[0];
    var line = 1;
    for(i = 0; i < test; i++) {
        var N = +input[line++];
        var arr = [];
    
        for(var j = 0; j < N; j++) {
            arr.push(input[line++].trim().split(" ").map(Number));
        }
        // console.log(arr)
        var res = [];
            for(r = 0; r < N; r++) {
                for(cl = 0; cl < N; cl++){
                if(r == 0){
                 // console.log(arr[cl][r])
                  res.push(arr[cl][r])
                } else if(r + cl == N -1 ) {
                 // console.log(arr[r][cl])
                  res.push(arr[cl][r])
                } else if(r == N - 1) {
                  res.push(arr[cl][r])
                
              }
              }
        }
        console.log(res.join(" "));
    }
    }
    
    if (process.env.USERNAME === "haris") {
      runProgram(`1
      3
      1 2 3
      4 5 6
      7 8 9`);
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