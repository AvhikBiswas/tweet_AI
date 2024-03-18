import express, { Express } from "express";
import dotenv from "dotenv";
import apiRoutes from "./routes/index";
import cors from "cors";

dotenv.config();

export const app: Express = express();

app.use(cors({
  origin: "*", 
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

app.use(express.json());
app.use("/api", apiRoutes);

app.get("/", (req, res) => {
  res.send("hello I'm Here");
});

const port = process.env.PORT || 9000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
