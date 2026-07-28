import { Router } from "express";
import taskRoutes from "./task.route.ts";
import userRoutes from "./user.route.ts";

const router = Router();
// task list routes
router.use("/api", taskRoutes);
router.use("/api",  userRoutes);
const apiRoutes = router;

export default apiRoutes;
