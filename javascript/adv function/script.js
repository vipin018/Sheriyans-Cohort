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








