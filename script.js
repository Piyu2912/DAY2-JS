// console.log("Example for Var");
// var a=10;
// var a=20;
// console.log(a);      //10   //20

// console.log("Example for Let");
// let a=10;
// let a=20;      //we cannot redeclare.
// console.log(a);   //10    //error 

// let a=10;     //10
// a=20;         //20
// console.log(a);   //we can modify like this

// console.log("Example for Const");
// const a=10;
// a=20;
// console.log(a);  //throws error that assigned to fixed value.  cannot modified

// console.log("Example of Hoisting");
// var x=10;
// function getName(){
//     console.log("Hi")
// }
// getName();
// console.log(x);

// a=10;
// console.log(a);   //10
// var a;   // var a can move to the top of code.

// var a=10;
// console.log(a);   //10
// let b=20;
// console.log(b);   //20

console.log(a);   //undefined
console.log(b);   //Cannot access 'b' before initialization
var a=10;
let b=20;