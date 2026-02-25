import express from "express";
import { createEventSchema } from "../validation/event.validation";
import { validate } from "../middleware/validate.middleware";
import { createEventController } from "../controllers/event.controller";

const router = express.Router();

router.post(
  "/events",
  validate(createEventSchema),
  createEventController
);