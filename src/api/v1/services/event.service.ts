import * as repository from "../repositories/event.repository";
import { Event } from "../models/event.model";

export const createEventService = async (data: Event) => {
  const now = new Date().toISOString();

  return repository.createEvent({
    ...data,
    createdAt: now,
    updatedAt: now,
  });
};

export const getAllEventsService = async () => {
  return repository.getAllEvents();
};

export const getEventByIdService = async (id: string) => {
  return repository.getEventById(id);
};

export const updateEventService = async (
  id: string,
  data: Partial<Event>
) => {
  return repository.updateEvent(id, {
    ...data,
    updatedAt: new Date().toISOString(),
  });
};

export const deleteEventService = async (id: string) => {
  return repository.deleteEvent(id);
};