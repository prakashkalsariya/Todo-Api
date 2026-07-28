import { CommonHelpers } from "../helpers/common.ts";
import { tasksModel } from "../models/task.model.ts";

export class taskController {
  static getTasks = async (req: any, resp: any) => {
    try {
      let tasks = await tasksModel.find();
      let userFilterTasks = tasks.filter(
        (task) => task.user === CommonHelpers?.getEmailByToken(req),
      );

      if (!userFilterTasks.length) {
        return resp.status(201).json({
          success: false,
          message: "No tasks found",
        });
      }

      resp.status(200).json({
        success: true,
        count: userFilterTasks.length,
        data: userFilterTasks,
      });
    } catch (error: any) {
      console.error(error);

      resp.status(500).json({
        success: false,
        message: "Internal Server Error",
        error: error.message,
      });
    }
  };

  static deleteTask = async (req: any, resp: any) => {
    try {
      const { id } = req.params;

      const tasks = await tasksModel.findById(id);

      if (!tasks) {
        return resp.status(404).json({
          success: false,
          message: "task not found",
        });
      }

      let resData = await tasksModel.findByIdAndDelete(id);

      return resp.status(200).json({
        success: true,
        message: "task deleted successfully",
        data: resData,
      });
    } catch (error: any) {
      if (error.name === "CastError") {
        return resp.status(400).json({
          success: false,
          message: "Invalid task ID",
        });
      }

      return resp.status(500).json({
        success: false,
        message: "Internal Server Error",
        error: error.message,
      });
    }
  };

  static createTask = async (req: any, resp: any) => {
    try {
      const { title, description, date, time } = req.body;

      // Validation
      if (!title || !description || !date || !time) {
        return resp.status(400).json({
          success: false,
          message: "All fields are required",
        });
      }

      let email = CommonHelpers.getEmailByToken(req);

      const task = await tasksModel.create({
        title,
        description,
        date,
        time,
        user: email,
      });

      console.log("task>>", task);

      resp.status(201).json({
        success: true,
        message: "Task created successfully",
        data: task,
      });
    } catch (error: any) {
      resp.status(500).json({
        success: false,
        message: "Internal Server Error",
        error: error.message,
      });
    }
  };

  static updateTask = async (req: any, resp: any) => {
    try {
      const { id } = req.params;
      const { title, description, date, time } = req.body;
      // Check if task exists
      const task = await tasksModel.findById(id);

      if (!task) {
        return resp.status(404).json({
          success: false,
          message: "Task not found",
        });
      }

      // Update task
      task.title = title || task.title;
      task.description = description || task.description;
      task.date = date || task.date;
      task.time = time || task.time;

      await task.save();

      return resp.status(200).json({
        success: true,
        message: "Task updated successfully",
        data: task,
      });
    } catch (error: any) {
      // Invalid MongoDB ObjectId
      if (error.name === "CastError") {
        return resp.status(400).json({
          success: false,
          message: "Invalid Task ID",
        });
      }

      return resp.status(500).json({
        success: false,
        message: "Internal Server Error",
        error: error.message,
      });
    }
  };

  static getOne = async (req: any, resp: any) => {
    try {
      const { id } = req.params;

      const task = await tasksModel.findById(id);

      if (!task) {
        return resp.status(404).json({
          success: false,
          message: "Task not found",
        });
      }

      return resp.status(200).json({
        success: true,
        data: task,
      });
    } catch (error: any) {
      // Invalid MongoDB ObjectId
      if (error.name === "CastError") {
        return resp.status(400).json({
          success: false,
          message: "Invalid Task ID",
        });
      }

      return resp.status(500).json({
        success: false,
        message: "Internal Server Error",
        error: error.message,
      });
    }
  };
}
