import express from "express";
import characterModel from "../models/Character";

const routes = (app) => {
    app.route("/").get((req, res) => {
        res.send("Connected");
    })

    app.use(
        express.json(),
        characterModel
    )
}

export default routes;