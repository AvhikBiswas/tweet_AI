import express, { Router } from "express";
import V1Router from "./v1/index"

const router:Router=express.Router();

router.use("/v1",V1Router)

export default router;