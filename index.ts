import "dotenv/config";
import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

// Default Route
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Welcome to Express Playground" });
});

// About Route
app.get("/about", (req: Request, res: Response) => {
  res.status(200).json({ message: "About Express Playground" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
