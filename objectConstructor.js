function Book(title,author,year){
    this.title = title;
    this.author=author;
    this.year=year;
}

let book1 = new Book("The Catcher in the Rye","J.D. Salinger",1951);
let book2 = new Book("To kill a Mockingbird","Harper Lee",1960);

console.log(book1);