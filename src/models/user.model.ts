import mongoose from "mongoose";

export const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 5,
    },

     profile_image: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

export const usersModel = mongoose.model("users", userSchema);
