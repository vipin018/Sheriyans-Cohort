## Adv Functions

### Rest Parameters -> ...arr is used to store all the arguments in an array

### Hoisting -> in js hmesha declaration first hoti hai means in below case x is declared first and then it is initialized toh declared x ekdum top pe rahegi jiska matlab hai ki x undefined rahegi phir usko initialize karegi 10

### IIFE (IMMEDIATELY INVOKED FUNCTION EXPRESSION) -> function jo bhi bana hai usko phir se call nahi karna padta hai toh iife use hota hai
example:
```
const maths = (function (){
    return{
        add: function(a,b){
            return a+b;
        },
        sub: function(a,b){
            return a-b;
        },
        mul: function(a,b){
            return a*b;
        },
        div: function(a,b){ 
            return a/b;
        }
    }
}())
maths.add(10,20);
maths.sub(10,20);
maths.mul(10,20);
maths.div(10,20);
```
- in iife we can create private variables and functions which cannot be accessed outside the iife

*que : difference between higher order function and callback function* 

*ans : higher order function is a function which can return a function or accept a function as an argument, while callback function is a function which is passed as an argument to another function and is called inside the function.
example:
```
function a(function1){
    function1();
}
a(function(){
    console.log("hello");
});
```
above there 
HOF is -> a
callback function is -> function(){
    console.log("hello");
}

means jo function ko argument jaise pass kre hai usko callback function kehte hai. and jo function jo return kre hai usko higher order function kehte hai.

#### agar ek funcn mei param mei tumne funcn pass kiya toh jo pass kiya woh callback function hota hai aur jisme pass kiya woh higher order function hota hai.


## SCOPE

### GLOBAL SCOPE -> a variable declared outside a function is called a global variable and is accessible everywhere in the code.

### LOCAL SCOPE -> a variable declared inside a function is called a local variable and is accessible only inside the function.

## MAP, FILTER, REDUCE

### MAP -> map is a higher order function that returns a new array by applying a function to each element of the original array.

### FILTER -> filter is a higher order function that returns a new array by applying a function to each element of the original array and returning only the elements that satisfy the condition.

### REDUCE -> reduce is a higher order function that returns a single value by applying a function to each element of the original array.
