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
