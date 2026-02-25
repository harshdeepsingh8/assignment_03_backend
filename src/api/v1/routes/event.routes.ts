import express from "express";

import { createEventSchema } from "../validation/event.validation";
import { validate } from "../middleware/validate.middleware";

import {
  createEventController,
  getAllEventsController,
  getEventByIdController,
  updateEventController,
  deleteEventController,
} from "../controllers/event.controller";

const router = express.Router(); // ✅ MUST BE BEFORE USING

router.post("/events", validate(createEventSchema), createEventController);

router.get("/events", getAllEventsController);
router.get("/events/:id", getEventByIdController);
router.put("/events/:id", updateEventController);
router.delete("/events/:id", deleteEventController);

export default router;