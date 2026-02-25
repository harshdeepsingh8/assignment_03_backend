import { Request, Response } from "express";

export const createEventController = async (req: Request, res: Response) => {
  res.status(201).json({
    message: "Event created",
    data: req.body,
  });
};