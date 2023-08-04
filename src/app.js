import express from "express";

const app = express();

const books = [
    { id: 1, "title": "Lord of the Rings" },
    { id: 2, "title": "Hobbit" }
];

app.get("/", (req, res) =>{
    return res.status(200).send("Hello World!");
});

app.get("/livros", (req, res) =>{
    return res.json(books);
});

app.post("/livros", (req, res) => {
    const { id, title } = req.body;

    const book = { id, title }

    books.push(book);

    res.status(201).json(book);

});

export default app;