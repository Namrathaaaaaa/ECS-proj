import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hello from Docker v3 🎉" });
});

router.get("/health", (req: Request, res: Response) => {
  res.status(200).json({ message: "Everything is good here 👀" });
});

export default router;
