import jwt from "jsonwebtoken";
import multer from "multer";
export class CommonHelpers {
  static getEmailByToken = (req: any) => {
    const authHeader = req.headers.authorization;
    const token = authHeader.split(" ")[1];
    const decoded: any = jwt.verify(
      token,
      process.env.JWT_SECRET || "best-task-app",
    );
    let email = decoded?.email;
    return email;
  };

  static fileUpload = () => {
    const storage = multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, "src/files/images");
      },
      filename: (req, file, cb) => {
        cb(null, file.originalname);
      },
    });
    const upload = multer({ storage });
    return upload.single("profile_image");
  };
}
