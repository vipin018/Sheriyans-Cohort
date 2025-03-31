
let arr = [1, 2, 3, 4, 5];
console.log(arr);
// to add element at the end of the array
arr.push(6);
console.log(arr);
// to push element at the beginning of the array
arr.unshift(0);
console.log(arr);

//  removind element from the end of the array
arr.pop();
console.log(arr);
//  to remove element from the beginning of the array   
arr.shift();
console.log(arr);

// LENGTH OF THE ARRAY
let length = arr.length;
console.log(`size of array is ${length}`);

// to check if the array is empty
if(arr.length==0){
    console.log("emmpty array");
}
else{
    console.log("not empty");
}

// print all elements of the array in single line
for(let i=0;i<arr.length;i++){
    console.log(arr[i],end=" ");
}







