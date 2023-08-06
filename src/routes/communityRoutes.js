import express from "express";
import CommunityController from "../controllers/communityController.js";

const router = express.Router();

router
	.get("/characters", CommunityController.findAll)
	.get("/characters/:id", CommunityController.findById)
	.post("/characters", CommunityController.save)
	.put("/characters/:id", CommunityController.update)
	.delete("/character/:id", CommunityController.delete);

export default router;