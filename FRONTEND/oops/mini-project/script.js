class library{
    constructor(){
        this.books = []; 
    }
    addBook(book){
        this.books.push(book);
    }
    listBooks(){
        this.books.forEach(book => {
            console.log(book);
        });
    }
}
let ternaLibrary = new library();
ternaLibrary.addBook("Books of Shaders");
ternaLibrary.addBook("Threejs Journey");


class book{
    constructor(title,author,price){
        this.title = title;
        this.author = author;
        this.price = price;
        this.readStatus = false;
    }
    information(){
        console.log(`${this.title} is written by ${this.author} and costs ${this.price} rupees, and you have ${this.readStatus ? "read" : "not read"} this book`);
    }
    read(){
        this.readStatus = true;
    }
}
let book1 = new book("Books of Shaders", "Wawa Sensei", 199);
let book2 = new book("Threejs Journey", "Bruno Simon", 299);


