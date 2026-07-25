import { Router } from "express";
import taskRoutes from "./task.route.ts";
import userRoutes from "./user.route.ts";
import { verifyToken } from "../middlewares/auth.ts";

const router = Router();
// task list routes
router.use("/api", verifyToken, taskRoutes);
router.use("/api", userRoutes);
const apiRoutes = router;

export default apiRoutes;
