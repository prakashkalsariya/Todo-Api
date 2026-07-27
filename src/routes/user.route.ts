import { Router } from "express";
import { userController } from "../controllers/user.controller.ts";
import multer from "multer";

const router = Router();
// const file = multer({ dest: "src/files/images/" });

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "src/files/images");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

router.post(
  "/register",
  upload.single("profile_image"),
  userController.register,
);
router.post("/login", userController.login);

const userRoutes = router;

export default userRoutes;
