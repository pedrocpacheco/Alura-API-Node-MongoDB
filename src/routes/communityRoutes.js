import express from "express";
import CommunityController from "../controllers/communityController";

const router = express.Router();

router
    .get("/characters", CharacterController.findAll)
    .get("/characters/:id", CharacterController.findById)
    .post("/characters", CharacterController.save)
    .put("/characters/:id", CharacterController.update)
    .delete("/character/:id", CharacterController.delete)

export default router;