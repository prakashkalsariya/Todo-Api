import { Router } from "express";
import { tasksModel } from "../models/task.model.ts";
import { taskController } from "../controllers/task.controller.ts";

const router = Router();

router.get(`/`, taskController.getTasks);

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
