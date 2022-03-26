

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