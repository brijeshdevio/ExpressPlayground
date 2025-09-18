import express, { NextFunction, Request, Response } from "express";

const app = express();

// Logger middleware
// Middleware is a function that is executed before the route handler
const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(`Request: ${req.method} ${req.url}`);
  next();
};

// Register middleware
app.use(express.json());
app.use(logger);

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Day 2 – Express Middleware Basics" });
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
