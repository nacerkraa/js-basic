class Book{
    constructor(title, auther, pages, price, status){
        this.title = title;
        this.auther = auther;
        this.pages = pages;
        this.price = price;
        this.status = status;
    }

    showPageNumbers() {
        return this.pages;
    }
}

export default Book;