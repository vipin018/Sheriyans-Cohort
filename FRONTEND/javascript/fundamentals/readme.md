## fundamentals of javascript

### data types

- *primitive data types* ->
    1. number -> 10, 10.5, 10e10 (integer, float, exponential)
    2. string -> "hello", 'hello', `hello`
    3. boolean -> true, false
    4. null -> null (empty value)
    5. undefined -> undefined (not defined)
    6. symbol -> Symbol() (unique value)
    7. bigint -> 10n (big integer)
- *reference data types* ->
    1. object
    2. array
    3. function

- undefined -> undefined (not defined) 
example -> let a;
console.log(a); // undefined

- null -> null (empty value)
example -> let b = null;
console.log(b); // null

*Hoisting* -> the process of declaring a variable before it is used
example -> console.log(a); let a = 10;
// the o/p will be undefined because the variable is not initialized it is just declared

### Conditional Statements

- if statement -> if (condition) {  
    // code to be executed if the condition is true
}
- if else statement -> if (condition) {  
    // code to be executed if the condition is true
} else {
    // code to be executed if the condition is false
}
- else if statement -> if (condition) {  
    // code to be executed if the condition is true
} else if (condition) {
    // code to be executed if the condition is true
} else {
    // code to be executed if the condition is false
}
- switch statement -> switch (expression) {
    case value1:
        // code to be executed if the expression is value1
        break;
    case value2:
        // code to be executed if the expression is value2
        break;
}


#### Binary Operators

- Arithmetic Operators -> +, -, *, /, %, ++, --
- Assignment Operators -> =, +=, -=, *=, /=, %=
- Comparison Operators -> ==, ===, !=, !==, >, <, >=, <=
- Logical Operators -> &&, ||, !
- Bitwise Operators -> &, |, ^, ~, <<, >>
- Ternary Operators -> condition ? true : false

*que: difference between == and ===*
- `==` -> compares the value only
- `===` -> compares the value and type


### Loops

- for loop -> for (let i = 0; i < 10; i++) {
    // code to be executed
}
- while loop -> while (condition) {
    // code to be executed
}
- do while loop -> do {
    // code to be executed
} while (condition);

