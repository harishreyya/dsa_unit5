function runProgram(input) {
  input = input.trim().split("\n")
  var N = +input[0]
  var gas = input[1].trim().split(" ").map(Number)
  var cost = input[2].trim().split(" ").map(Number)

  console.log(canCompleteCircuit(gas, cost))

   }
  function canCompleteCircuit(gas, cost) {
        var sumRemaining = 0;
        var total = 0; 
        var start = 0; 
     
        for (var i = 0; i < gas.length; i++) {
            var remaining = gas[i] - cost[i];
     
            if (sumRemaining >= 0) { 
                sumRemaining += remaining;
          
            } else {
                sumRemaining = remaining;
                start = i;
            }
            total += remaining;
        }
     
        if (total >= 0){
            return start;
        }else{
            return -1;
        }
    }
 




   if (process.env.USERNAME === 'haris') {
     runProgram(`5
     1 2 3 4 5
     3 4 5 1 2`)
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
   //evulution sum
   