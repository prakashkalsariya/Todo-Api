import jwt from "jsonwebtoken";
import multer from "multer";
import { commonVariables } from "./common.anums.ts";
export class CommonHelpers {
  static getEmailByToken = (req: any) => {
    const authHeader = req.headers.authorization;
    const token = authHeader.split(" ")[1];
    const decoded: any = jwt.verify(token, process.env.JWT_SECRET || "");
    let email = decoded?.email;
    return email;
  };

  static fileUpload = () => {
    const storage = multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, commonVariables?.fileStorage?.images_directory);
      },
      filename: (req, file, cb) => {
        cb(null, file.originalname);
      },
    });
    const upload = multer({ storage });
    return upload.single("profile_image");
  };
}
