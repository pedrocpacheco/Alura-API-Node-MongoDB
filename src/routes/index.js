import express from "express";
import characterRoutes from "./characterRoutes.js"
import communityRoutes from "./communityRoutes.js"

const routes = (app) => {
    app.route("/").get((req, res) => {
        res.send("Connected");
    })

    app.use(
        express.json(),
        characterRoutes,
        communityRoutes
    )
}

export default routes;