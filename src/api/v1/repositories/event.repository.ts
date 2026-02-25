import { db } from "../../../../config/firebaseConfig";
import { Event } from "../models/event.model";

const collection = db.collection("events");

export const createEvent = async (data: Event) => {
  const docRef = await collection.add(data);
  return { id: docRef.id, ...data };
};

export const getAllEvents = async () => {
  const snapshot = await collection.get();
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

export const getEventById = async (id: string) => {
  const doc = await collection.doc(id).get();
  if (!doc.exists) return null;

  return { id: doc.id, ...doc.data() };
};

export const updateEvent = async (id: string, data: Partial<Event>) => {
  const docRef = collection.doc(id);
  const doc = await docRef.get();

  if (!doc.exists) return null;

  await docRef.update(data);
  return { id, ...data };
};

export const deleteEvent = async (id: string) => {
  const docRef = collection.doc(id);
  const doc = await docRef.get();

  if (!doc.exists) return false;

  await docRef.delete();
  return true;
};