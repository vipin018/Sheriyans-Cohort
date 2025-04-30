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

class book{
    constructor(title, author, genre, price){
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.price = price;
        this.readStatus = false;
    }
    information(){
        console.log(`${this.title} is written by ${this.author} belongs to ${this.genre} genre and costs ${this.price} rupees, and you have ${this.readStatus ? "read" : "not read"} this book`);
    }
}

let book1 = new book("Deathbed", "John Doe", "Fiction", 199);
let book2 = new book("You Me and the End of the World", "John Doe", "Romance", 299);
let book3 = new book("The last of Us", "Neil Gaiman", "Horror", 399);

let ternaLibrary = new library();
ternaLibrary.addBook(book1);
ternaLibrary.addBook(book2);
ternaLibrary.addBook(book3);
ternaLibrary.listBooks();
