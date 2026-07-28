import express from "express";
import cors from "cors";
import apiRoutes from "./routes/routes.ts";
// import path from 'express'

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/images", express.static("src/files/images"));
app.use(apiRoutes);

export default app;
