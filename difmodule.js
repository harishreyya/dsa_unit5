function Wildcards(str) { 

  let strArr = str.split(' ');
  let specChar = strArr[0];
  let charStr = strArr[1].split('');
 
  let arr = specChar.split('');
  let letters = /^[A-Za-z]+$/
  let i = 0
 
  while(i<arr.length){
    if(arr[i]=="+"){
      if(!charStr[0].match(letters))return "false"
      charStr = charStr.slice(1,charStr.length)
    }else if(arr[i]=='*'){
      let curr = charStr[0];
      let j = 1, k = 0
      if(arr[i+1]!=undefined && arr[i+1]=='{'){
        k=arr[i+2]
        i=i+4
      }else{
        k=3
        i++
      }
      while(j<k){
        charStr = charStr.slice(1,charStr.length)
        if(charStr[0]!=curr)return "false"
        j++
      }
      charStr = charStr.slice(1,charStr.length)
      continue
 
    }
    i++
 
  }
  if(charStr.length!=0)return 'false'
  return "true"
 
 }
    
 // keep this function call here 
 console.log(Wildcards(readline()));