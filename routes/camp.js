import express from "express"
import { createCamp, deleteCamp, getCamp, getCamps, updateCamp } from "../controllers/camp.js";

const router = express.Router();

router.post("/", createCamp);

router.put("/:id", updateCamp);

router.delete("/:id", deleteCamp);

router.get("/:id", getCamp);

router.get("/", getCamps);

export default router;