import { Router } from "express";
import { taskController } from "../controllers/task.controller.ts";

const router = Router();

router.get("/tasks", taskController.getTasks);
router.put(`/task/update/:id`, taskController.updateTask);
router.delete("/task/delete/:id", taskController.deleteTask);
router.post("/task/create", taskController.createTask);
router.get("/task/:id", taskController.getOne);

const taskRoutes = router;

export default taskRoutes;
