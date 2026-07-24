import app from "./app.ts";

const PORT = process.env.PORT || 4800;

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});