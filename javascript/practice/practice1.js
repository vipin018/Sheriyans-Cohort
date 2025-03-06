// 1. Log "Hello, JavaScript!" to the console in 3 different ways.

console.log("Hello, JavaScript!");
console.warn("Hello, JavaScript!");
console.error("Hello, JavaScript!");


// 2. Perform 35 * 2 - (10 / 2) + 7 and log the result.

console.log(35 * 2 - (10 / 2) + 7);

// 3. Log the data type of "123", 123, true, and null using typeof.

console.log(typeof "123");
console.log(typeof 123);
console.log(typeof true);
console.log(typeof null);

// 4. Write a program that swaps the values of two variables

let a = 1;
let b = 3;
console.log("a : ", a, "b : ", b);
// using temp variable
let temp = a;
a = b;
b = temp;
console.log("a : ", a, "b : ", b);
// without using temp variable

a = a + b;
b = a - b;
a = a - b;
console.log("a : ", a, "b : ", b);

// using array destructuring

[a, b] = [b, a];
console.log("a : ", a, "b : ", b);

// 5. Use console.group() to organize logs into a group

console.group("Group 1");
console.log("Name : ", "John");
console.log("Age : ", 20);
console.log("City : ", "New York");
console.groupEnd();

console.groupCollapsed("Group 2");
console.log("Name : ", "Jane");
console.log("Age : ", 21);
console.log("City : ", "Los Angeles");
console.groupEnd();

// 6. Declare a const object, modify its properties, and log the updated object.

const person = {
    name: "Vipin",
    age: 21,
    city: "Navi Mumbai",
    isMale: true,
}
console.log(person);
person.name = "6pin";
person.city = "Mumbai";
person.age = 22;
console.log(person);

// 7.  Convert "50" (string) into a number using 3 different methods.

let num = "50";
console.log(Number(num));
console.log(+"50");
console.log(num * 1);

// 8. Check if "JavaScript" contains "Script" without using .includes()
