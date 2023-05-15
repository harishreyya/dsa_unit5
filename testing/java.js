// for (let i =1; i<=3;i++){
// for(let j=1;j<3*i;j++){
//     console.log("*")
// }
// print("\n");
// // }

// const a = "td";
// const b = !a;

// console.log(b)

// console.log("3"-"2");

// const obj = {
//     name: "ss",
//     getName() {
//     console.log(this.name);
//     }
//     };
//     var name="ssg";
//     const getName=obj.getName;
//     getName();

// let obj={
//     foo: "foo",
//     bar: "bar",
//     zoo: false
//     }
    
//     let one= obj?.zoo ?? obj?.foo
//     let two= obj.zoo || obj.foo
    
//     console.table([one,two])

// let arr = [1,2,3,4,5]

// for(i=0;i<arr.length;i++){

//     console.log(arr[i])
// }
// let a = ql;
// function b(){

// }

const arrayOfColorFunctions = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']

// let randomColorString = '#';
let randomColorString = '#';


for (let x = 0; x < 6; x++){

    let index = Math.floor(Math.random() * 16)
    let value = arrayOfColorFunctions[index]

    randomColorString += value
}
console.log(randomColorString)