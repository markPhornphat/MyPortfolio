import { Router } from "express";
import { getExample } from "../controllers/example_controller";

const router = Router();

//api/example/get
router.get("/get", getExample);

export default router;
