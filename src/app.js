import express from "express";
import db from "./config/dbConnect.js"
import characterModel from "./models/Character.js";
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, "Error to connect to DB"));
db.once("open", () => { console.log("DB Connection was succedded") });

const app = express();
app.use(express.json());
routes(app);


// ! DELETE: character by IDa
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