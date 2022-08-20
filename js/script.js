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
        <li class="item">${book.pages}</li>
        <li class="item">${book.auther}</li>
        <li class="item">${book.price}</li>
    </ul>
    </div>
`;

document.body.innerHTML = content;

console.log("the object name",book);
console.log("the object name",book.status);
console.log("the object name",book.title);