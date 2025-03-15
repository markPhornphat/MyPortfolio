import express from "express";
import cors from "cors";
import dotenv from "dotenv";
// import authRoutes from "./routes/auth.js";
// import dataRoutes from "./routes/data.js";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// app.use("/api/auth", authRoutes);
// app.use("/api/data", dataRoutes);
app.get("/", (req, res) => {
  res.send(`Test using this port ${5001}`);
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () =>
  console.log(`[server]: Server is running at http://localhost:${PORT}`)
);
