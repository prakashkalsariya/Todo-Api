import { Router } from "express";
import { taskController } from "../controllers/task.controller.ts";
import { userController } from "../controllers/user.controller.ts";

const router = Router();

router.post("/register", userController.register);
router.post("/login", userController.login);

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

const userRoutes = router;

export default userRoutes;
