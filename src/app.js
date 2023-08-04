import express from "express";
import db from "./config/dbConnect.js"
import characterModel from "./models/Character.js";
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, "Error to connect to DB"));
db.once("open", () => { console.log("DB Connection was succedded") });

const app = express();
app.use(express.json());
routes(app);


// * GET: character by ID
app.get("/characters/:id", (req, res) =>{
    let index = findcharacters(parseInt(req.params.id));
    if(index !== -1) {
        const character = characterModel[index];
        res.json(character);
    }else{
        res.status(404).json({ error: "character not founded" })
    }
});

// ! DELETE: character by ID
app.delete("/characters/:id", (req, res) => {
    let { id } = req.params;
    let index = findcharacters(id);
    characterModel.splice(index, 1); // ? Deleta so o item
    res.send(`character ${id} remove`);
})

function findcharacters(id){
    return characterModel.findIndex(character => character.id === id);
}

export default app;