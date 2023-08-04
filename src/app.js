import express from "express";
import db from "./config/dbConnect.js"

db.on("error", console.log.bind(console, "Error to connect to DB"));
db.once("open", () => { console.log("DB Connection was succedded") });

const app = express();
app.use(express.json())

const characters = [
    { id: 1, "title": "Lord of the Rings" },
    { id: 2, "title": "Hobbit" }
];

// * GET: Hello World
app.get("/", (req, res) =>{
    return res.status(200).send("Hello World!");
});

// * GET: characters List
app.get("/characters", (req, res) =>{
    return res.json(characters);
});

// ? POST: Create character
app.post("/characters", (req, res) => {
    const { id, title } = req.body;
    const character = { id, title }
    characters.push(character);

    res.status(201).json(character);
});

//TODO PUT: Change character by ID 
app.put("/characters/:id", (req, res) =>{
    const { title } = req.body;
    const character = { title }

    let index = findcharacters(req.params.id);
    if(index !== -1){
        characters[index] = character;
        res.status(201).json(character);
    }else{
        res.status(404).json({ error: "character not founded" })
    }
});

// * GET: character by ID
app.get("/characters/:id", (req, res) =>{
    let index = findcharacters(parseInt(req.params.id));
    if(index !== -1) {
        const character = characters[index];
        res.json(character);
    }else{
        res.status(404).json({ error: "character not founded" })
    }
});

// ! DELETE: character by ID
app.delete("/characters/:id", (req, res) => {
    let { id } = req.params;
    let index = findcharacters(id);
    characters.splice(index, 1); // ? Deleta so o item
    res.send(`character ${id} remove`);
})

function findcharacters(id){
    return characters.findIndex(character => character.id === id);
}

export default app;