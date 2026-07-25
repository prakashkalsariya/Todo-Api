import { tasksModel } from "../models/task.model.ts";
import { usersModel } from "../models/user.model.ts";
import bcrypt from "bcrypt";

export class userController {
  static register = async (req: any, resp: any) => {
    try {
      const { name, email, password } = req.body;

      // Validation
      if (!name || !email || !password) {
        return resp.status(400).json({
          success: false,
          message: "Name, email and password are required",
        });
      }

      // Check existing user
      const existingUser = await usersModel.findOne({ email });

      if (existingUser) {
        return resp.status(409).json({
          success: false,
          message: "Email already registered",
        });
      }

      // Hash password
      // const hashedPassword = await bcrypt.hash(password, 10);

      // Create user
      const user = await usersModel.create({
        name,
        email,
        password,
      });

      // Remove password from response
      const userResponse = {
        _id: user._id,
        name: user.name,
        email: user.email,
        createdAt: user.createdAt,
      };

      return resp.status(201).json({
        success: true,
        message: "User registered successfully",
        data: userResponse,
      });
    } catch (error: any) {
      return resp.status(500).json({
        success: false,
        message: "Internal Server Error",
        error: error.message,
      });
    }
  };
}
