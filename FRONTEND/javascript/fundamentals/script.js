//  data types

/*
let a = 10;
let b = "hello";
let c = true;
let d = null;
let e = undefined;
let f = Symbol();
let g = 10n;


console.log("a -", a, "type -", typeof a);
console.log("b -", b, "type -", typeof b);
console.log("c -", c, "type -", typeof c);
console.log("d -", d, "type -", typeof d);
console.log("e -", e, "type -", typeof e);
console.log("f -", f, "type -", typeof f);
console.log("g -", g, "type -", typeof g);
*/

/*
let num;
console.log(num)
// the o/p will be undefined because the variable is not initialized it is just declared


let n = null;
console.log(n)
// the o/p will be null because the variable is initialized with null

let big = 135450000n;
console.log(big)
// the o/p will be 10n because the variable is initialized with bigint
*/

//  Conditional Statements

/*
let age = prompt("Enter your age");
console.log(Number(age))
if (age >= 18) {
    console.log("You are an adult");
} else if (age >= 13) {
    console.log("You are a teenager");
} else {
    console.log("You are a child");
}


let a = 10; // number
let b = "10"; // string

console.log(a == b) // true -> because == compares the value only
console.log(a === b) // false -> because === compares the value and type

let c = 11;

c > 10 ? console.log("greater") : console.log("lesser")
*/

let a =0;

while (a < 10) {
    console.log("while loop", a)
    a++;
}


for (let i = 0; i < 10; i++) {
    console.log("for loop", i)
}

for ( let i = 10; i > 0; i--) {
    console.log("reverse for loop", i)
}

console.log(typeof NaN)