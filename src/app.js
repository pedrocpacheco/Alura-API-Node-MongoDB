import express from "express";

const app = express();
app.use(express.json())

const books = [
    { id: 1, "title": "Lord of the Rings" },
    { id: 2, "title": "Hobbit" }
];

// * GET: Hello World
app.get("/", (req, res) =>{
    return res.status(200).send("Hello World!");
});

// * GET: Books List
app.get("/books", (req, res) =>{
    return res.json(books);
});

// ? POST: Create Book
app.post("/books", (req, res) => {
    const { id, title } = req.body;
    const book = { id, title }
    books.push(book);

    res.status(201).json(book);
});

//TODO PUT: Change Book by ID 
app.put("/books/:id", (req, res) =>{
    const { title } = req.body;
    const book = { title }

    let index = findBooks(req.params.id);
    books[index] = book;

    res.status(201).json(book);
});

// * GET: Book by ID
app.get("/books/:id", (req, res) =>{
    let index = findBooks();
    if(index !== -1) {
        const book = books[index];
        res.json(book);
    }else{
        res.status(404).json({ error: "Book not founded" })
    }
});

function findBooks(id){
    return books.findIndex(book => book.id === id);
}

export default app;