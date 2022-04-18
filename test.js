

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

harish
