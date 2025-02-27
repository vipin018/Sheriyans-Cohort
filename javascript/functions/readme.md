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






