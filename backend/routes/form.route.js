import express from "express"
import { create, getAll } from "../controllers/form.controller.js";

const router = express.Router();

router.post('/create', create);
router.get('/all', getAll);

export default router;