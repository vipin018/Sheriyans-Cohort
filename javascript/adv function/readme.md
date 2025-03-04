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


