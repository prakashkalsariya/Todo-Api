import { Router } from "express";
import { taskController } from "../controllers/task.controller.ts";
import { verifyToken } from "../middlewares/auth.ts";

const router = Router();

router.get("/tasks", verifyToken, taskController.getTasks);
router.put(`/task/update/:id`, verifyToken, taskController.updateTask);
router.delete("/task/delete/:id", verifyToken, taskController.deleteTask);
router.post("/task/create", verifyToken, taskController.createTask);
router.get("/task/:id", verifyToken, taskController.getOne);

const taskRoutes = router;

export default taskRoutes;
