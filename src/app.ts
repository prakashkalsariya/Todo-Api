import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, resp) => {
  resp.send("Home page");
});

// app.use(apiRoutes);
// app.use(errorHandler);

export default app;
