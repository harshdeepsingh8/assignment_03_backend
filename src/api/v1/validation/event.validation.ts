import Joi from "joi";

export const createEventSchema = Joi.object({
  name: Joi.string()
    .min(3)
    .required(),

  date: Joi.date()
    .iso()
    .greater("now")
    .required(),

  capacity: Joi.number()
    .integer()
    .min(5)
    .required(),

  registrationCount: Joi.number()
    .integer()
    .min(0)
    .max(Joi.ref("capacity"))
    .default(0),

  status: Joi.string()
    .valid("active", "cancelled", "completed")
    .default("active"),

  category: Joi.string()
    .valid("conference", "workshop", "meetup", "seminar", "general")
    .default("general"),
})
.messages({
  "any.required": 'Validation error: "{#label}" is required',
  "string.min": 'Validation error: "{#label}" length must be at least {#limit} characters long',
  "number.min": 'Validation error: "{#label}" must be greater than or equal to {#limit}',
  "number.integer": 'Validation error: "{#label}" must be an integer',
  "any.only": 'Validation error: "{#label}" must be one of [{#valids}]',
  "date.greater": 'Validation error: "{#label}" must be greater than "now"',
  "number.max": 'Validation error: "{#label}" must be less than or equal to ref:capacity',
});