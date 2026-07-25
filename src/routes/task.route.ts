import { Router } from "express";
import { tasksModel } from "../models/task.model.ts";
import { taskController } from "../controllers/task.controller.ts";

const router = Router();

router.get(`/`, (req, resp) => {
  resp.send("hello");
});

router.get("/api/tasks", taskController.getTasks);
router.put(`/api/task/update/:id`, taskController.updateTask);
router.delete("/api/task/delete/:id", taskController.deleteTask);
router.post("/api/task/create", taskController.createTask);
router.get("/api/task/:id", taskController.getOne);

// router.get(`/task/:id`, taskController.getTasks);

// router.post(`/verify-phone`, verifyToken, AgentsController.verifyPhone);

// router.get(
//   `/`,
//   verifyToken,
//   validator(AgentUserValidations.getAgents),
//   AgentsController.getAgents
// );

// router.post(`/update-email`, (req: any, res: any, next) => {
//   AgentsController.updateEmailAndResendOtp(req, res, next);
// });

const taskRoutes = router;

export default taskRoutes;
