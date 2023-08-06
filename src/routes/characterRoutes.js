import express from "express";
import CharacterController from "../controllers/characterController.js";

const router = express.Router();

router
    .get("/characters", CharacterController.findAll)
    .get("/characters/busca", CharacterController.findByCommunity)
    .get("/characters/:id", CharacterController.findById)
    .post("/characters", CharacterController.save)
    .put("/characters/:id", CharacterController.update)
    .delete("/character/:id", CharacterController.delete)

export default router;