function seperationOfOddEven(N, arr,Q) {
   let even = "";
    let odd = "";
    for(i=0;i<arr.length;i++){
        
        if(arr[i]%2==0){
         even = even+arr[i] + " "
        }else if (arr[i]%2 ==1) {
            odd = odd+arr[i] + " " 
        }
 
    }
    

    if(Q==1){
        console.log(even + "" + odd)
    }else if(Q==2){
        console.log(odd + "" +even)
    }


  }
  
  seperationOfOddEven(N, arr,Q)

  