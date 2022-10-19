import express from "express"
import { createCamp, deleteCamp, getCamp, getCamps, updateCamp, getCampsAd } from "../controllers/camp.js";

const router = express.Router();

router.post("/", createCamp);

router.put("/:id", updateCamp);

router.delete("/:id", deleteCamp);

router.get("/:id", getCamp);

router.get("/", getCamps);

router.get("/reg/:mobile", getCampsAd);

export default router;
