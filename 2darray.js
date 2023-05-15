// var cubes = [
//     [1, 2, 3],
//     [4, 5, 6],    
//     [7, 8, 9],
//    ];

// arr = [].concat(...cubes)

// console.log(arr)
// sum=0

// for (i=0;i<arr.length;i++){
//     sum+=arr[i]
// }

// console.log(sum)

const arr = [1,2,3,4,5,6,7,8,9];
    
const newArr = [];
while(arr.length)
 newArr.push(arr.splice(0,3));
    
console.log(newArr);