## Functions 
function is a block of code designed to perform a particular task.

### Syntax
```javascript
function functionName(parameters) -> defining the function
{
    // code to be executed
}
functionName(parameters); -> calling the function
```

### Example
```javascript
function greet(name) {
    console.log("Hello, " + name + "!");
}
greet("John");
```

### why do we need functions?
- To avoid code duplication
- To make code more readable
- To make code more maintainable

### Parameters and Arguments
- Parameters are the variables listed inside the parentheses in the function definition.
example:
```javascript
function greet(name) {
    console.log("Hello, " + name + "!");
}
```
- Arguments are the values passed to the function.
example:
```javascript
greet("John");
```

#### que: how to pass parameters to a function?
```javascript
function greet(name) {
    console.log("Hello, " + name + "!");
}
greet("John");
```

## Types of Functions

1. function statement
example:
```javascript
function greet(name) {
    console.log("Hello, " + name + "!");
}
```
2. function expression
example:
```javascript
const greet = function(name) {
    console.log("Hello, " + name + "!");
}
```
3. Anonymous function
example:
```javascript
function(){
    console.log("Hello, world!");
}
```
4. Arrow function
example:
```javascript
const greet = (name) => {
    console.log("Hello, " + name + "!");
}
```
### Hoisting
it is a process of moving function declarations to the top of their scope before execution of the code.
example:
```javascript
console.log(a)
var a = 10;
```
in the upper case since the a is declared after the console.log so it will return undefined, and in js what happens is that the var a is moved to the top of the scope and the value is assigned to it later.
like this:
```javascript
var a;
console.log(a);
a = 10;
```



