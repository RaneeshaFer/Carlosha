import express from "express";
import { createContact } from "../controllers/contactController.js";

const router = express.Router();

// Routes
router.post("/", createContact);

export default router;
