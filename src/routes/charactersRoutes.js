import express from "express";
import CharacterController from "../controllers/characterController";

const router = express.Router();

router
    .get("/characters", CharacterController.findAll)
    .get("/characters/:id", CharacterController.findById)
    .post("/characters", CharacterController.saveCharacter)
    .put("/characters/:id", CharacterController.updateCharacter)

export default router;