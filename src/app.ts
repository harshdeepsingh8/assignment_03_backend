import express from "express";
import eventRoutes from "./api/v1/routes/event.routes";

const app = express();

app.use(express.json());

// Health check route
app.get("/health", (_req, res) => {
  res.status(200).json({ message: "API is running" });
});

// Register routes
app.use("/api/v1", eventRoutes);

export default app;