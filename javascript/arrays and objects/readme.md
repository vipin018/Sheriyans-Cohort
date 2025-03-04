## ARRAYS

- it is a collection of elements of different data types.
- it can store multiple values in a single variable.

*Creating an array*

```
let arr = [1,2,3,4,5]; // using the array literal
let arr1 = new Array(1,2,3,4,5); // using the new keyword
```

**When to use which?**

- use the array literal when you want to create an array with a known set of values.
example:
```
let arr = [1,2,3,4,5];
```

- use the new keyword when you want to create an array with a known set of values.
example: 
create an array of big numbers
```
let arr1 = new Array(100);
```

### Homogenous Arrays

- it is an array that contains only one type of data.
example:
```
let arr = [1,2,3,4,5];
```

### Hetrogenous Arrays

- it is an array that contains different types of data.
example:
```
let arr = ["apple",1,true,null,undefined,NaN,function(){},];
```

## OBJECTS

- it is a collection of properties and methods.

example:
```
let obj = {
    name: "John",
    age: 20,
    city: "New York"
}
```

**why we need objects?**

- to store multiple values in a single variable.
- to store complex data.
- to store real world data.

*How to create an object?*

```
let obj = {
    name: "John",
    age: 20,
    city: "New York"
}
```

```
let obj = new Object();
```



