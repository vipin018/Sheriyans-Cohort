// array

let arr = [1,2,3,4,5]; // array declaration
console.log(arr); // printing the array

console.log("array at index 0 :",arr[0]); // accessing the first element of the array
console.log("array at index 1 :",arr[1]); // accessing the second element of the array
console.log("array at index 2 :",arr[2]); // accessing the third element of the array
console.log("array at index 3 :",arr[3]); // accessing the fourth element of the array
console.log("array at index 4 :",arr[4]); // accessing the fifth element of the array
console.log("array at index 5 :",arr[5]); // accessing the sixth element of the array
console.log("array length :",arr.length); // accessing the length of the array
// updating the array
arr[0] = 10;
console.log(arr);

// there are two ways to create an array

let arr1 = new Array(1,2,3,4,5); // using the new keyword
console.log(arr1);

let arr2 = [1,2,3,4,5]; // using the array literal
console.log(arr2);


let arr3 = new Array(10);

for(let i = 0; i < arr3.length; i++){
    arr3[i] = i;
}
console.log(arr3);

let arrr = ["apple",1,true,null,undefined,NaN,function(){},];
console.log(arrr);

// OBJECTS

let obj = {
    name: "John",
    age: 20,
    city: "New York",
    isMale: true,
    
}
console.log(obj);

