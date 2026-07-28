import express from "express";
import cors from "cors";
import apiRoutes from "./routes/routes";
import { commonVariables } from "./helpers/common.anums";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  "/images",
  express.static(commonVariables?.fileStorage?.images_directory),
);
app.use(apiRoutes);

export default app;
