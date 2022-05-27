

// var x = 7
// // console.log(x)

// function getname(){
//     console.log("aur bhai hoisting")
    
// }


// console.log(getname())

/*hoisting is a phenomenon in javascript by
 which you can access the functions and
  variables even before you have initialzied it.*/


//---------------------------------------------------------------------------

  
//   function x(){
//       var x = 7;
//     return   function y(){
//           console.log(x)
//       }
      
//   }
//   var z = x()

//   console.log(z)
// z()

/*closure is functions along with its lexical scope bundles together */

//-----------------------------------------------------------------------------

//set timeout + closures

// function x(){
//    // using let will give 1 2 3 4 5 in 1 sec of interval due to blockscope of let
//     for(let i=1;i<=5;i++){
//     setTimeout(function y(){
//         console.log(i)
//     },i*1000)
//     }
//     console.log("using let")
    
// }
// x()


// //using var will give 6 6 6 6 6 as var is global scope
// function x(){
//     for(var i=1;i<=5;i++){
//     setTimeout(function y(){
//         console.log(i)
//     },i*1000)
//     }
//     console.log("using var")
    
// }
// x()
//using var and closures to get 1 2 3 4 5 

// function x(){
//     for(var i=1;i<=5;i++){
//         function close(t){
//     setTimeout(function (){
//         console.log(t)
//     },t*1000)

//     }
//     close(i)
// }
//     console.log("using var and closures")
    
// }
// x()



/*javascript never waits i takes it and wait till time expires and prints it*/

//------------------------------------------------------------------------------

// function foo1(){
//     return {
//         bar:'hello'
//     };
// }
// function foo2(){
//     return 
//     {
//         bar:"hello"
//     };
// }
// function foo3(){
//     return {
//         bar:"hello"
//     };
// }
// foo1()
// foo2()
// foo3()
// // console.log(foo1())
// // console.log(foo2())
// // console.log(foo3())


// ----------------------------------------------------------------------------------



// for(const i =0; i <= 10; i++){
//   setTimeout(function(){
//       console.log(i);
//   }, 0);    cannot assign i++ beacuse const cant reassign
// }


// let b = 0;

// {
//   console.log(a)
// }
//let and const are hoisted but cannot be accessed in temporal dead zone


// let arr = [1,3,4,6,7,8]

// arr.filter(()=>{
  
// // // })
// // // console.log(arr)

// let str = "Fhytai"
// let res = ""
// for(i=0;i<str.length;i++){
//   if(str[i]=="a" || str[i]=="e"||str[i]=="i"||str[i]=="o"||str[i]=="u"){
//     res+=str[i].toUpperCase()
//   }else{
// res+=str[i]
//   }
// }
// console.log(res)

// let arr = [1,3,4,6,7,8,2,5]

// let maximum = -Infinity
// for(i=0;i<arr.length;i++){
//   if(maximum<arr[i]){
//     maximum=arr[i]
//   }
// }
// console.log(maximum)

// const userprofue = {
//   user:user,
//   profile:profile,

// // }

// async function getUsers(){
//   let doc = await Promise.all(getUser(),getProfile(),getPosts());
//   // let user = doc[0];
//   // let profile = doc[1];
//   // let p = doc[2];
// const userprofile = {
//   user:doc[0],
//   profile:doc[1],
//   p:doc[2]
// }
//   // const userprofile = {
//   //   user:user,
//   //   profile:profile,
//   //   posts:p,

//   // };
// let  {user,profile,posts} =  userprofile

//   return userprofile;
// }

//my name is intu
// console.log(typeof(42.1))
// var a = ["a","b","c","d"]
// a.pop()
// console.log(a.pop())

// const a = {x:1}
// const b = {x:1}
// console.log(a!=b)

//scared about interview
// var x= 45;

// // // console.log(typeof(x));
// // var name= "antra"
// // console.log(typeof(name));
// var y=true;
// console.log(typeof(true));
// var name="antara"
// console.log(name);

// name="chomtit"
// console.log(name);
// var gender="female"
// console.log(gender);

//   profile:doc[1],
//   p:doc[2]
// }
//   // const userprofile = {
//   //   user:user,
//   //   profile:profile,
//   //   posts:p,

//   // };
// let  {user,profile,posts} =  userprofile

//   return userprofile;
// }

//my name is intu
// console.log(typeof(42.1))
// var a = ["a","b","c","d"]
// a.pop()
// console.log(a.pop())

// const a = {x:1}
// const b = {x:1}
// console.log(a!=b)

//scared about interview
// var x= 45;

// // // console.log(typeof(x));
// // var name= "antra"
// // console.log(typeof(name));
// var y=true;
// console.log(typeof(true));
// var name="antara"
// console.log(name);

// name="chomtit"
// console.log(name);
// var gender="female"
// console.log(gender);

// var x = 42;

// console.log(x+1)

//  var name = "42";

//  console.log(name+1)

// Coding Assignment: (Time 30 Mins)
// (Pick any two)

// Given an array of distinct integers. The task is to count all the triplets such that the sum of two elements equals the third element.
 
// Example 1:
// Input:
// arr[] = {1, 5, 3, 2, 6, 9}
// Output: 4
// Explanation: There are 4 such triplets: 
// 1 + 2 = 3, 1 + 5 = 6, 2 + 3 = 5, 3 + 6 = 9


// Given a long text of string, find and highlight all the vowels, with each vowel being highlighted with a different color.
// Note:: do not use regex or any javascript string functions, you need to write an algorithm to do the same.

// Example:




// Sort an array based on the frequency of the elements, the maximum frequency of a number comes first.
// Example 1
// Input:  arr[] = [2, 5, 2, 8, 5, 6, 8, 8]
// Output: arr[] = [8, 8, 8, 2, 2, 5, 5, 6]

// Example 2
// Input: arr[] = [2, 5, 2, 6, -1, 9999999, 5, 8, 8, 8]
// Output: arr[] = [8, 8, 8, 2, 2, 5, 5, 6, -1, 9999999]





//https://blog.isquaredsoftware.com/2021/01/context-redux-differences/

// let a = 2;
// let b = 3;
// let c = 1;

// console.log(a && b && c)


//everything which not in the function is in the global execution

// ------------------------------------------------------------------------

// var array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];

// ; // [1, 2, 3, 5, 9, 8]

// console.log(Array.from(new Set(array)))



// var array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];

// console.log(uniqueArray(array)); // [1, 2, 3, 5, 9, 8]

// function uniqueArray(array) {
//   var hashmap = {};
//   var unique = [];

//   for(var i = 0; i < array.length; i++) {
//     // If key returns undefined (unique), it is evaluated as false.
//     if(!hashmap.hasOwnProperty(array[i])) {
//       hashmap[array[i]] = 1;
//       unique.push(array[i]);
//     }
//   }

//   return unique;
// }

// function add (a) {
//   return function (b) {
//     return a + b;
//   }
  
// }
// console.log(add(3))

// var a = "42";

// var b = a * 2;

// console.log(b)//84

// var a = "42";

// var b = a + 2;

// console.log(b)//422