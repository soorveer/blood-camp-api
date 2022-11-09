import express from "express";
import {signin} from "../controllers/user.js"
import {createError} from "../utils/error.js";

const router= express.Router();

router.get("/:admin/:password",signin);

export default router;
