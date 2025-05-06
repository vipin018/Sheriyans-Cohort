class library{
    constructor(){
        this.books = []; 
    }
    addBooks    (books){
        this.books.push(...books);
    }
    listBooks(){
        this.books.forEach(book => {
            console.log(book);
        });
    }
}

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
let ternaLibrary = new library();
let book1 = new book("Books of Shaders", "Wawa Sensei", 199);
let book2 = new book("Threejs Journey", "Bruno Simon", 299);
let book3 = new book("The Pragmatic Programmer", "Andrew Hunt", 399);

ternaLibrary.addBooks([book1, book2, book3]);
