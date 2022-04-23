

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

Coding Assignment: (Time 30 Mins)
(Pick any two)

Given an array of distinct integers. The task is to count all the triplets such that the sum of two elements equals the third element.
 
Example 1:
Input:
arr[] = {1, 5, 3, 2, 6, 9}
Output: 4
Explanation: There are 4 such triplets: 
1 + 2 = 3, 1 + 5 = 6, 2 + 3 = 5, 3 + 6 = 9


Given a long text of string, find and highlight all the vowels, with each vowel being highlighted with a different color.
Note:: do not use regex or any javascript string functions, you need to write an algorithm to do the same.

Example:




Sort an array based on the frequency of the elements, the maximum frequency of a number comes first.
Example 1
Input:  arr[] = [2, 5, 2, 8, 5, 6, 8, 8]
Output: arr[] = [8, 8, 8, 2, 2, 5, 5, 6]

Example 2
Input: arr[] = [2, 5, 2, 6, -1, 9999999, 5, 8, 8, 8]
Output: arr[] = [8, 8, 8, 2, 2, 5, 5, 6, -1, 9999999]

General Aptitude Questions

Time:: 30 Mins 
+1 for correct answers
-0.5 for incorrect answers

1. Two people run around a circular track and take 42 sec and 30 sec to make one complete round. If they start together after how much amount of time will they meet again in the same place?

      (A) 3 min 30 sec | (B) 4 min 30 sec |(C) 3 min 20 sec |(D) 2 min 50 sec |(E) None of these

2. Can you find the value for the expression: 

1620 (B) 1875  (C) 1540 (D) 1325  (E) None of these

3. The greatest number which on dividing 1657 and 2037 leaves remainders 6 and 5 respectively, is:

123  (B) 127  (C) 235  (D) 305  (E) None of these

4. The L.C.M. of two numbers is 48. The numbers are in the ratio 2 : 3.
 The sum of the numbers is:

28  (B) 32  (C) 40 (D) 64  (E) None of these

5. Two tailors X and Y are paid a total of Rs. 550 per week by their employer. If X is paid 120 percent of the sum paid to Y, how much is Y paid per week? 

200  (B) 250  (C) 300 (D) 350 (E) None of these

6. A family consists of two grandparents, two parents, and three grandchildren. The average age of the grandparents is 67 years, that of the parents is 35 years and that of the grandchildren is 6 years. What is the average age of the family? 

28 ( 4 / 7 ) years (B) 31 ( 5 / 7) years (C) 32 ( 1 / 7 ) years (D) Cannot be determined (E) None of these

7. The ratio of the number of boys and girls in a school of 720 students is 7:5. How many more girls should be admitted to make the ratio 1:1? 

90  (B) 120  (C) 220 (D) 240 (E) None of these

8. A 20 liters mixture of milk and water comprising 60% pure milk is mixed with "x" liters of pure milk. The new mixture comprises 80% milk. What is the value of "x"? 

20 (B) 18 (C) 22 (D) 25 (E) None of These

9. Rahul and Rafick start a business with investments of Rs. 2500 and Rs. 2250 respectively. After 2 months, Rahul takes out Rs.1250 from his capital. After 1 more month, Rafick takes out Rs.750 of his capital while Ramesh joins them with a capital of Rs. 3500. At the end of 6 months, they earn a profit of Rs. 2540. Which of the following is the share of each member in the profit?

Rahul - Rs. 700, Rafick - Rs. 950, Ramesh - Rs. 890
Rahul - Rs. 900, Rafick - Rs. 750, Ramesh - Rs. 890
Rahul - Rs. 800, Rafick - Rs. 900, Ramesh - Rs. 840
 Rahul - Rs. 840, Rafick - Rs. 800, Ramesh - Rs. 900
None of these

10. A seller gains the cost of 40 dozen apples by selling 25 dozen apples. Find out the gain percent

60% (B) 40% (C) 58% (D) 62% (E) 49%

11. Nalini borrowed Rs. 1075 from her friend at 7% per annum. She returned the amount after 7 years. How much amount did she pay? 

1612.75 (B) 1712.75 (C) 1602.75 (D) 1601.75 (E) None of these


12. A train moves past a telegraph post and a bridge 264 m long in 8 seconds and 20 seconds respectively. What is the speed of the train?

76 km/hr (B) 79.2 km/hr (C) 79 km/hr (D) 69.5 km/hr (E) None of these

13. If |x-2| < 12 then

x < 14  (B)  x < -10  (C) -10 < x < 14 (D)  x < 20 (D) None of the above

14. In how many different ways can the letters of the word 'OFFICES' be arranged?

5040 (B) 720 (C) 2520 (D) 1440 (E) None of these

15. The area of a square is 196 sq cm whose side is half of the radius of a circle. The circumference of the circle is equal to the breadth of a rectangle if the perimeter of a rectangle is 712 cm. What is the length of the rectangle?  

196 cm (B) 186 cm (C) 180 cm (D) 190 cm (E) None of these

16. In an arithmetic progression the first term is 7 and its common difference is 6. If the general term is an, find a10 - a7.

19  (B) 21 (C) 18 (D) 15 (E) 17

17. How many days are there in k weeks and k days?

7k2  (B) 7(k+1) (C)7k + 1 (D) 8k (E) None of these

18. A group of students decided to collect as much paise from each member of the group as is the number of members. If the total collection amounts to Rs. 59.29, the number of the member is the group is:

57 (B) 67 (C) 77 (D) 87 (E) 97 
 
19. From the top of a building 40 meters high, the angle of depression of the ball lying on the ground was observed to be 60 degrees. Find the distance between the ball and the foot of the building.

20 (B) 80*√3 (C) 40/√3 (D) 40*√3 (E) None of these

20. In order to obtain an income of Rs. 650 from 10% stock at Rs. 96, one must make an investment of:

6240 (B) 6340 (C) 6440  (D) 6640 (E) None of these


