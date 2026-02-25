import { Request, Response, NextFunction } from "express";
import { ObjectSchema } from "joi";

export const validate = (
  schema: ObjectSchema,
  property: "body" | "params" = "body"
) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = schema.validate(req[property]);

    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
      });
    }

    req[property] = value;
    next();
  };
};