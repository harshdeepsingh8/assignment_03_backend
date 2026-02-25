import { Request, Response } from "express";
import * as service from "../services/event.service";

export const createEventController = async (
  req: Request,
  res: Response
) => {
  const event = await service.createEventService(req.body);

  return res.status(201).json({
    message: "Event created",
    data: event,
  });
};

export const getAllEventsController = async (
  req: Request,
  res: Response
) => {
  const events = await service.getAllEventsService();
  res.status(200).json({ data: events });
};

export const getEventByIdController = async (
  req: Request,
  res: Response
) => {
  const event = await service.getEventByIdService(req.params.id as string);

  if (!event) {
    return res.status(404).json({ message: "Event not found" });
  }

  res.status(200).json({ data: event });
};

export const updateEventController = async (
  req: Request,
  res: Response
) => {
  const updated = await service.updateEventService(
    req.params.id as string,
    req.body
  );

  if (!updated) {
    return res.status(404).json({ message: "Event not found" });
  }

  res.status(200).json({ message: "Event updated", data: updated });
};

export const deleteEventController = async (
  req: Request,
  res: Response
) => {
  const deleted = await service.deleteEventService(req.params.id as string);

  if (!deleted) {
    return res.status(404).json({ message: "Event not found" });
  }

  res.status(200).json({ message: "Event deleted" });
};