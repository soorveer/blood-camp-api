import express from "express";
import { createNgo, deleteNgo, getNgo, getNgos, updateNgo ,getNgoReg,signin} from "../controllers/ngo.js";
import { createError } from "../utils/error.js";

const router = express.Router();

router.post("/", createNgo);

router.put("/:id", updateNgo);

router.delete("/:id", deleteNgo);

router.get("/reg/:reg",getNgoReg);

router.get("/signUp/:user/:password",signin);

router.get("/:id", getNgo);

router.get("/", getNgos);


export default router;
