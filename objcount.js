
let strings = ["a","b","b","a","c"]

let obj = {}
for(let i = 0; i < strings.length; i++){
    if(obj[strings[i]] === undefined){
        obj[strings[i]] = 1
    } else {
        obj[strings[i]] += 1
    }
}


  for(k in obj){
 console.log([k] + obj[k])
  }

