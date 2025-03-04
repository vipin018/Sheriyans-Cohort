
// function greet(name) {
//     console.log("Hello, " + name + "!");
// }
// greet("John");
// greet("Jane");
// console.log("first");
// greet("Jim");

// // sum of three numbers

// function sum(a, b, c) {
//     console.log(a + b + c);
// }
// sum(4, 9, 2);

// let str = "hello Javascript";
// console.log(str.includes("java"));

// console.log(myFuc());
//     function myFuc(){
//         return "hello world";
//     }

// const greet = function(){
//     console.log("hello world");
// }
// greet();
// greet = function(){
//     console.log("hello");
// }


function outer(){
    let x = 0;
    return function inner(){
        x++;
        console.log(x);
    }
}

const counter = outer();
counter();
counter();









