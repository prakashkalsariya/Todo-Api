import { tasksModel } from "../models/task.model.ts";

export class taskController {
  static getTasks = async (req: any, resp: any) => {
    try {
      let tasks = await tasksModel.find();
      if (!tasks.length) {
        return resp.status(404).json({
          success: false,
          message: "No tasks found",
        });
      }

      resp.status(200).json({
        success: true,
        count: tasks.length,
        data: tasks,
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
}
