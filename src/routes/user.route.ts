import { Router } from "express";
import { userController } from "../controllers/user.controller";
import { CommonHelpers } from "../helpers/common";

const router = Router();
// const file = multer({ dest: "src/files/images/" });

router.post("/register", CommonHelpers.fileUpload(), userController.register);
router.post("/login", userController.login);

const userRoutes = router;

export default userRoutes;
