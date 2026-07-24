import { Router } from "express";
import taskRoutes from "./task.route.ts";

const router = Router();
// task list routes
router.use("/", taskRoutes);
const apiRoutes = router;

export default apiRoutes;
