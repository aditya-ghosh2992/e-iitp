import express from "express";
import {verifyemail,registerUser} from "../controllers/user.js"
const router = express.Router();

router.post("/verifyemail",verifyemail)
router.post("/register",registerUser);

export default router;