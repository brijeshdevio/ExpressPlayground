import express, { Request, Response } from "express";
import cors from "cors";
import { prisma } from "./db";

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

// create user
app.post("/users", async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  const user = await prisma.user.create({
    data: {
      name,
      email,
      password,
    },
  });
  res.status(201).json(user);
});

export default app;
