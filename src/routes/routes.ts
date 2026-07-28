import { Router } from "express";
import taskRoutes from "./task.route";
import userRoutes from "./user.route";

const router = Router();
// task list routes
router.use("/api", taskRoutes);
router.use("/api",  userRoutes);
const apiRoutes = router;

export default apiRoutes;
