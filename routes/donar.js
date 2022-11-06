import express from "express"
import { createDonar, deleteDonar, getDonar, getDonars, updateDonar, getDonarEjs } from "../controllers/donar.js";

const router = express.Router();

router.post("/", createDonar);

router.put("/:id", updateDonar);

router.delete("/:id", deleteDonar);

router.get("/:id", getDonar);

router.get("/ejs/:id", getDonarEjs);

router.get("/", getDonars);

export default router;
