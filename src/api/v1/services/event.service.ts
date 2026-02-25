import * as repository from "../repositories/event.repository";
import { Event } from "../models/event.model";

export const createEventService = async (data: Event) => {
  try {
    const now = new Date().toISOString();

    return await repository.createEvent({
      ...data,
      createdAt: now,
      updatedAt: now,
    });
  } catch (error) {
    throw new Error("Failed to create event");
  }
};

export const getAllEventsService = async () => {
  try {
    return await repository.getAllEvents();
  } catch (error) {
    throw new Error("Failed to fetch events");
  }
};

export const getEventByIdService = async (id: string) => {
  try {
    return await repository.getEventById(id);
  } catch (error) {
    throw new Error("Failed to fetch event");
  }
};

export const updateEventService = async (
  id: string,
  data: Partial<Event>
) => {
  try {
    return await repository.updateEvent(id, {
      ...data,
      updatedAt: new Date().toISOString(),
    });
  } catch (error) {
    throw new Error("Failed to update event");
  }
};

export const deleteEventService = async (id: string) => {
  try {
    return await repository.deleteEvent(id);
  } catch (error) {
    throw new Error("Failed to delete event");
  }
};