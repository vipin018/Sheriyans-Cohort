//  rest parameters -> ...arr is used to store all the arguments in an array

function sum(a,b,c,...arr){
    console.log(a+b+c, arr);
}

sum(1,2,3,4,5,6);


// hoisting -> in js hmesha declaration first hoti hai means in below case x is declared first and then it is initialized toh declared x ekdum top pe rahegi jiska matlab hai ki x undefined rahegi phir usko initialize karegi 10

console.log(x);
var x = 10;

outer();
function outer(){
   console.log("hello");
}



// iife (IMMEDIATELY INVOKED FUNCTION EXPRESSION) -> function jo bhi bana hai usko phir se call nahi karna padta hai toh iife use hota hai

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

console.log(maths.add(10,20));
console.log(maths.sub(10,20));
console.log(maths.mul(10,20));
console.log(maths.div(10,20));

// hof (HIGHER ORDER FUNCTION) -> in this function we can pass function as an argument and return a function, in simple words HOF is a funcn jo yaa toh return kare funcn yaa toh accept kre funcn in parameter, ya fir dono kre.

function sayHello(){
    return function(){
       return function(){
        return function(){
            return function(){
                console.log("blah blah");
            }
        }
       }
    }
}
sayHello()()()()(); // this is called currying -> when we pass a function as an argument and return a function

    // OR

    
    function a(function1){
        function1();
    }
    a(function(){
        console.log("hello");
    })

    // CALLBACK FUNCTION -> function jo bhi pass kre hai ek function ko as an argument usko callback function kehte hai.
    
    function a(function1){
        function1();
    }
    a(function(){
        console.log("hello");
    })
    
// pure and impure function -> a pure function is a function which always returns the same output for the same input and does not have any side effects. while an impure function is a function which may return different output for the same input and may have side effects.

function pure(a,b){
    return a+b;
}

console.log(pure(1,2));
function impure(a,b){
    return a+b+Math.random();
}

console.log(impure(1,2));


// SCOPE -> scope is the region of the code where a variable is accessible.

// GLOBAL SCOPE -> a variable declared outside a function is called a global variable and is accessible everywhere in the code.

var x = 10;
function a(){
    console.log(x);
}
a();

// LOCAL SCOPE -> a variable declared inside a function is called a local variable and is accessible only inside the function.  

function a(){
    var x = 10;
    console.log(x);
}
a();

// closure -> closure is a function that has access to the variables of its parent scope even after the parent function has closed.

function a(){
    var x = 10;
    return function b(){
        console.log(x);
    }
}
a()();



