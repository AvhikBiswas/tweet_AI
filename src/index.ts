import express, { Express } from "express";
import dotenv from "dotenv";
import apiRoutes from "./routes/index"


dotenv.config();

export const app: Express = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use("/api",apiRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
