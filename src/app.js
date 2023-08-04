import express from "express";
import db from "./config/dbConnect.js"
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, "Error to connect to DB"));
db.once("open", () => { console.log("DB Connection was succedded") });

const app = express();
app.use(express.json());
routes(app);

export default app;