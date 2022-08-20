class Book{
    constructor(title, auther, pages, price, status){
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


const book = new Book(
    'Brad website',
    1997,
    'Hasan',
    505,
    26.3,
    true
);


const content = `
    <div>
    <h2>${book.title}</h2>
    <ul>
        <li>${book.printAge(1997)}</li>
        <li>${book.auther}</li>
        <li>${book.price}</li>
    </ul>
    </div>
`;