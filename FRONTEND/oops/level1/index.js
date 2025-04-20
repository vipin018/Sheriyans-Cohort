/*
* This is a old way to create a object when there is no class keyword.
//  constructor function
//  in a constructor function the first letter is capital
function Insaan() {
    this.name = "vipin"; //--> it is like 
    this.age = 20;
}

let person1 = new Insaan();

console.log(person1);

// if you see new keyword while calling a function then immediately create a blank object.

// and when you see this keyword then put that blank object in that place.

*/
/*
* EXAMPLE

function Candy(flavor, price, quantity){
    this.flavor = flavor;
    this.price = price;
    this.quantity = quantity;
}

let candy1 = new Candy("chocolate", 10, 5);
let candy2 = new Candy("vanilla", 15, 3);
let candy3 = new Candy("strawberry", 20, 2);

console.log(candy1);
console.log(candy2);
console.log(candy3);
*/

// using class keyword

class Candy {
    constructor(flavor, price, quantity, isAvailable, description) {
        this.flavor = flavor;
        this.price = price;
        this.quantity = quantity;
        this.isAvailable = isAvailable;
        this.description = description;        
    }

}

let candy1 = new Candy("chocolate", 10, 5, true, "This is a chocolate candy");
let candy2 = new Candy("vanilla", 15, 3, true, "This is a vanilla candy");
let candy3 = new Candy("strawberry", 20, 2, true, "This is a strawberry candy");

console.log(candy1);
console.log(candy2);
console.log(candy3);





