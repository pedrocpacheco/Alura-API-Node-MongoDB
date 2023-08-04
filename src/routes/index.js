import express from "express";
import characters from "../models/Character";

const routes = (app) => {
    app.route("/").get((req, res) => {
        res.send("Connected");
    })

    app.use(
        express.json(),
        characters
    )
}

export default routes;