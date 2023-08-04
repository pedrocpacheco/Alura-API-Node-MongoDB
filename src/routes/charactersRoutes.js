import express from "express";
import CharacterController from "../controllers/characterController";

const router = express.Router();

router
    .get("/characters", CharacterController.findAll);

export default router;