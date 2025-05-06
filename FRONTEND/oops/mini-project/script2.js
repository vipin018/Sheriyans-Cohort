class mobileShop{
    constructor(){
       this.mobiles = [];
    }
    addMobiles(mobiles){
        this.mobiles.push(...mobiles);
    }
    listMobiles(){
        this.mobiles.forEach(mobile => {
            console.log(mobile);
        });
    }
}

class mobile{
    constructor(brand,model,price){
        this.brand = brand;
        this.model = model;
        this.price = price;
    }
    information(){
        console.log(`${this.brand} ${this.model} is priced at ${this.price} rupees`);
    }
}

let shop1 = new mobileShop();
let mobile1 = new mobile("Samsung", "Galaxy S20", 1000);
let mobile2 = new mobile("Apple", "iPhone 12", 1200);
let mobile3 = new mobile("Google", "Pixel 5", 800);

shop1.addMobiles([mobile1, mobile2, mobile3]);
shop1.listMobiles();
