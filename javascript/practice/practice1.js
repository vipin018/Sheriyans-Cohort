// 1. Log "Hello, JavaScript!" to the console in 3 different ways.
console.groupCollapsed("Problem 1");
console.log("Hello, JavaScript!");
console.warn("Hello, JavaScript!");
console.error("Hello, JavaScript!");
console.groupEnd();

// 2. Perform 35 * 2 - (10 / 2) + 7 and log the result.
console.groupCollapsed("Problem 2");
console.log(35 * 2 - (10 / 2) + 7);
console.groupEnd();

// 3. Log the data type of "123", 123, true, and null using typeof.
console.groupCollapsed("Problem 3");
console.log(typeof "123");
console.log(typeof 123);
console.log(typeof true);
console.log(typeof null);
console.groupEnd();

// 4. Write a program that swaps the values of two variables
console.groupCollapsed("Problem 4");
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
console.groupEnd();

// 5. Use console.group() to organize logs into a group
console.groupCollapsed("Problem 5");
console.groupCollapsed("Task 1");
console.log("assignment 1 done");
console.log("assignment 2 done");
console.log("assignment 3 done");
console.groupEnd();
console.groupEnd();

// 6. Declare a const object, modify its properties, and log the updated object.
console.groupCollapsed("Problem 6");
const person = {
    name: "Vipin",
    age: 21,
    city: "Navi Mumbai",
    isMale: true,
}
console.log("Before update : ", person);
person.name = "6pin";
person.city = "Mumbai";
person.age = 22;
console.log("After update : ", person);
console.groupEnd();

// 7.  Convert "50" (string) into a number using 3 different methods.
console.groupCollapsed("Problem 7");
let num = "50";
console.log(Number(num), typeof Number(num));
console.log(+"50", typeof +"50");
console.log(num * 1, typeof (num * 1));
console.groupEnd();


// 8. Check if "JavaScript" contains "Script" without using .includes()


