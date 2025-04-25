/**
 * Creating a class pen using OOPS
 

class pen {
    constructor(color, price, brand, isAvailable, description) {
        this.color = color;
        this.price = price;
        this.brand = brand;
        this.isAvailable = isAvailable;
        this.description = description;
    }
}

const pen1 = new pen("red", 10, "parker", true, "this is a red pen");
const pen2 = new pen("blue", 20, "parker", true, "this is a blue pen");
const pen3 = new pen("green", 30, "parker", true, "this is a green pen");

console.log(pen1);
console.log(pen2);
console.log(pen3);

*/


// function toffee (name){
//     this.name = name;
// }

// toffee.prototype.price = 2;

// let t1 = new toffee("alpenliebe");
// let t2 = new toffee("pulse");

function human (name, age, gender){
    this.name = name;
    this.age = age;
    this.gender = gender;
}

human.prototype.sayHello = function(){
    console.log(`Hello, my name is ${this.name}`);
}

let h1 = new human("john", 20, "male");


