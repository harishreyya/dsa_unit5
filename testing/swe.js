let i = 1;

console.log(i++)
console.log(i++)
let j = i++ - 2;
let arr = [6,2,7,3,5]
for(i=0;i<arr.length;i++){
    if(arr[i]> arr[i+1]){
        arr[i]=arr[i+1]
    }
}
