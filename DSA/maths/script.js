/*
console.log("Math.ceil(4.6) :  " + Math.ceil(4.6)); // this will return 5 because it is the smallest integer greater than 4.6
console.log("Math.floor(4.6) : " + Math.floor(4.6)); // this will return 4 because it is the largest integer less than 4.6
console.log("Math.round(4.5) : " + Math.round(4.5)); // this will return 5 because it is the nearest integer to 4.5
console.log("Math.abs(-4.6) : " + Math.abs(-4.6)); // this will return 4.6 because it is the absolute value of -4.6
console.log("Math.max(23,12,34,56,78,90) : " + Math.max(23, 12, 34, 56, 78, 90)); // this will return 90 because it is the largest number
console.log("Math.min(23,12,34,56,78,90) : " + Math.min(23, 12, 34, 56, 78, 90)); // this will return 12 because it is the smallest number
console.log("Math.random() : " + Math.random()); // this will return a random number between 0 and 1
console.log("Math.sqrt(16) : " + Math.sqrt(16)); // this will return 4 because it is the square root of 16
console.log("Math.cbrt(125) : " + Math.cbrt(125)); // this will return 2 because it is the cube root of 8
console.log("Math.pow(2,3) : " + Math.pow(2, 3)); // this will return 8 because it is 2 to the power of 3
console.log("Math.PI : " + Math.PI); // this will return 3.141592653589793 because it is the value of pi
console.log("Math.trunc(4.625158) : " + Math.trunc(4.625158)); // this will return 4 because it is the integer part of 4.6

let a = 342.42113;
console.log(a.toFixed(1)); // this will return 342.4 because it is the number rounded to 1 decimal place
*/
/*
 => CALCULATE THE COMPOUND INTEREST
  we know the formula of compound interest is 
   A = P(1 + r/100)^t
   where A is the amount, P is the principal, r is the rate of interest and t is the time period
 CP = A - P 

let p = prompt("Enter the principal amount");
let r = prompt("Enter the rate of interest");
let t = prompt("Enter the time period");

let amount = p * (1 + r/100) ** t;
let cp = amount - p;

console.log(cp);

*/

/* 
=> GENERATE OTP

let otp = (Math.round(Math.random() * 1000000));
console.log(otp);

    */

/*
=> AREA OF TRIANGLE USING HERON'S FORMULA

we know the formula of area of triangle is 
A = sqrt(s(s-a)(s-b)(s-c))
where s is the semi-perimeter of the triangle and a,b,c are the sides of the triangle


let x = Number(prompt("Enter the first side of the triangle"));
let y = Number(prompt("Enter the second side of the triangle"));
let z = Number(prompt("Enter the third side of the triangle"));
if (x + y <= z || x + z <= y || y + z <= x) {
    console.log("Invalid triangle");
}
else {
    let s = (x + y + z) / 2;

    let area = Math.sqrt(s * (s - x) * (s - y) * (s - z));

    console.log(area);
}
*/
/*
=> FIND CIRCUMFERENCE AND AREA OF CIRCLE
 
we know the formula of circumference of circle is 
C = 2 * pi * r
where r is the radius of the circle

we know the formula of area of circle is 
A = pi * r^2


let r = Number(prompt("Enter the radius of the circle"));

let circumference = 2 * Math.PI * r;
let area = Math.PI * r * r;

console.log(circumference.toFixed(2));
console.log(area.toFixed(2));

*/

/*
=> FIND THE LARGEST NUMBER BETWEEN TWO NUMBERS

let a = Number(prompt("Enter the first number"));
let b = Number(prompt("Enter the second number"));

if (a > b) {
    console.log("a is greater than b");
}
else {
    console.log("b is greater than a");
}

*/

/*
=> FIND WHETHER THE NUMBER IS EVEN OR ODD

let num = Number(prompt("Enter the number"));

if(num%2==0){
    console.log("Even");
}
else{
    console.log("Odd");
}

*/






