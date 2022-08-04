function runProgram(input) {
    input = input.trim().split("\n")
    let N = Number(input[0])
    let str = input[1].trim().split("")
   
   Gppdstring(str,N)
}

    function Gppdstring(str,N) {
        let count = 0;
        let res = [];
    for(let i = 0; i < str.length; i++) {
       if(str.length % 2 === 0 && i % 2 == 0) {
      
            if(str[i] != str[i+1]){
                res.push(str[i])
                // res.push(str[i+1])
                
            } else {
                count++;
                res.push(str[i])
            }
        
        } else  { 
           if(str[i] != str[i+1]){
            res.push(str[i])
            // res.push(str[i+1])
                
            } else {
                count++
                res.push(str[i])
            }
           
        }
       }
        console.log(str.length-count)
        console.log(res)
    }
  
    
    if (process.env.USERNAME === "haris") {
        runProgram(`4
        ggoo`);
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