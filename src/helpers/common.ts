import jwt from "jsonwebtoken";
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
}
