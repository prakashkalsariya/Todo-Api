import { usersModel } from "../models/user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export class userController {
  static register = async (req: any, resp: any) => {
    console.log("req>>", req.body, req.file);

    try {
      const { name, email, password } = req.body;

      const existingUser = await usersModel.findOne({ email });

      if (existingUser) {
        return resp.status(400).json({
          success: false,
          message: "Email already exists",
        });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const user = await usersModel.create({
        name,
        email,
        password: hashedPassword,
        profile_image: req.file ? req.file.originalname : "",
      });

      resp.status(201).json({
        success: true,
        message: "Registration successful",
        user,
      });
    } catch (error: any) {
      resp.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };

  static login = async (req: any, resp: any) => {
    try {
      const { email, password } = req.body;

      // Validation
      if (!email || !password) {
        return resp.status(400).json({
          success: false,
          message: "Email and password are required",
        });
      }

      // Check user exists
      const user = await usersModel.findOne({ email });

      if (!user) {
        return resp.status(201).json({
          success: false,
          message: "User not found!",
        });
      }

      // Compare password
      const isPasswordMatch = await bcrypt.compare(password, user.password);

      if (!isPasswordMatch) {
        return resp.status(201).json({
          success: false,
          message: "Invalid password!",
        });
      }

      // Generate JWT Token
      const token = jwt.sign(
        {
          id: user._id,
          email: user.email,
        },
        process.env.JWT_SECRET || "",
        {
          expiresIn:"7d"
        },
      );

      return resp.status(200).json({
        success: true,
        message: "Login successfully",
        token,
        data: {
          id: user._id,
          name: user.name,
          email: user.email,
          profile_image: user.profile_image,
        },
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
