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

// const arr = [1,2,3,4,5,6,7,8,9];
    
// const newArr = [];
// while(arr.length)
//  newArr.push(arr.splice(0,3));
    
// console.log(newArr);

var cubes = [
        ['color', 100, true],
        ['red', 200, false],    
        ['white', 500, true],
       ];
result = [];
boolean = [];
str = []

       arr = [].concat(...cubes)
    //    console.log(arr)
       for(i=0;i<arr.length;i++){
        if(typeof(arr[i])=='number'){
   result.push(arr[i])
        }else if(typeof(arr[i])=='boolean'){
boolean.push(arr[i])
        }else{
   str.push(arr[i])
        }
       }

    ans = [];
    ans.push(str)
    ans.push(result)
    ans.push(boolean)

    console.log(cubes)
       console.log(ans)