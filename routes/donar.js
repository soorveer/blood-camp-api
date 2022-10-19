import express from "express"
import { createDonar, deleteDonar, getDonar, getDonars, updateDonar ,getDonarAd} from "../controllers/donar.js";

const router = express.Router();

router.post("/", createDonar);

router.put("/:id", updateDonar);

router.delete("/:id", deleteDonar);

router.get("/:id", getDonar);

router.get("/", getDonars);

router.get("/donar",getDonarAd);

export default router;
