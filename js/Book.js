class Book{
    constructor(title, age, auther, pages, price, status){
        this.title = title;
        this.age = age;
        this.auther = auther;
        this.pages = pages;
        this.price = price;
        this.status = status;
    }

    printAge() {
        return 2022 - this.age;
    }
}

export default Book;