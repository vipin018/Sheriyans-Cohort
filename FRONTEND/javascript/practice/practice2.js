
// que 1: create a function to calculate the sum of all numbers in an array.`

console.groupCollapsed("Sum of all numbers in an array");
let arr = [1, 2, 3, 4, 5];

let sum = arr.reduce((acc, curr) => {
    return acc + curr;
}, 0)

console.log(sum)
console.groupEnd();

// que 2: write a loop to print from 10 to 1 in reverse

console.groupCollapsed("Print from 10 to 1 in reverse");
for (let i = 10; i >= 1; i--) {
    console.log(i);
}
console.groupEnd();


// que 3: using while loop print multiple of 3 to 30

console.groupCollapsed("Print multiple of 3 to 30");

let i = 3;
while (i <= 30) {
    console.log(i);
    i += 3;
}
console.groupEnd();

// que 4: Write a program to calculate the sum of numbers from 1 to 100 using a loop

console.groupCollapsed("Sum of numbers from 1 to 100");

let add = 0;
for (let i = 0; i <= 100; i++) {
    add += i;
}
console.log(add);
console.groupEnd()

// que 5: Use a for...of loop to iterate over the string "JavaScript

console.groupCollapsed("Iterate over the string JavaScript");

let str = "JavaScript";
for (let i of str) {
    console.log(i)
}

console.groupEnd()

// que 6 : Remove duplicate values from an array

console.groupCollapsed("Remove duplicate values from an array");

let a = [1, 2, 3, 2, 4, 3, 2, 1, 3, 6, 4, 1, 2, 9, 0, 0, 5];
let unique = [...new Set(a)];
console.log(unique);

console.groupEnd();


let string = "JS"
for (let i of string){
    console.log(i+i)
}




