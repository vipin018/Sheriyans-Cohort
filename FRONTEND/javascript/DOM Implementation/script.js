/*
// Math.random() is a function that returns a random number between 0 and 1

console.log(Math.random());

// Math.random()*10 is a function that returns a random number between 0 and 10

console.log(Math.random() * 10);

// to get whole number instead of decimal we use Math.floor()

console.log(Math.floor(Math.random() * 10));

let a = 9;
console.log(`value of a is ${a}`)

*/

// RANDOM COLOR GENERATOR using DOM 

const box = document.getElementById('box');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
 let c1 = Math.floor(Math.random()*256);
 let c2 = Math.floor(Math.random()*256);
 let c3 = Math.floor(Math.random()*256);
 box.style.backgroundColor = `rgb(${c1}, ${c2}, ${c3})`;

});

