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


const book = new Book(
    'Brand Website',
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
        <li>${book.pages}</li>
        <li>${book.auther}</li>
        <li>${book.price}</li>
    </ul>
    </div>
`;

document.body.innerHTML = content;