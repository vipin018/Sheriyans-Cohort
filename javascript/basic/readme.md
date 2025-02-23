## Basic JavaScript

### printing messages to the console

- console.log() -> used to print the message to the console
- console.error() -> used to print the error message to the console
- console.warn() -> used to print the warning message to the console

### Variable Declaration

- let -> used to declare a variable
- const -> used to declare a constant
- var -> used to declare a variable

*que: what is the difference between let and var?*

- let is block scoped and var is function scoped
- let is mutable and var is mutable

*que: what is blocked scope and function scope?*

- block scope -> the scope of the variable is limited to the block of code
example:
```javascript
{
    let a = 10;
    console.log(a); // this will print 10
}
console.log(a); // this will throw an error because a is not defined
```
- function scope -> the scope of the variable is limited to the function
example:
```javascript
function myFunction() {
    var a = 10;
    console.log(a); // this will print 10
}
myFunction();
console.log(a); // this will print 10
```

#### display messgae to the user

- alert() -> used to display the message to the user
- prompt() -> used to display the message to the user and get the input from the user
- confirm() -> used to display the message to the user and get the input from the user

