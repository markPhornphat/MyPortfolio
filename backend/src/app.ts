import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import exampleRoute from "./routes/example_route";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/example", exampleRoute);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () =>
  console.log(`[server]: Server is running at http://localhost:${PORT}`)
);
