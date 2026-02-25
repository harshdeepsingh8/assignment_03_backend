import { createEventSchema } from "../src/api/v1/validation/event.validation";

describe("Create Event Validation", () => {

  it("should pass with valid data", () => {
    const data = {
      name: "Tech Conference",
      date: "2026-12-25T09:00:00.000Z",
      capacity: 100,
    };

    const { error } = createEventSchema.validate(data);
    expect(error).toBeUndefined();
  });

  it("should fail when name is missing", () => {
    const data = {
      date: "2026-12-25T09:00:00.000Z",
      capacity: 100,
    };

    const { error } = createEventSchema.validate(data);
    expect(error?.message).toContain('is required');
  });

  it("should fail when capacity < 5", () => {
    const data = {
      name: "Test Event",
      date: "2026-12-25T09:00:00.000Z",
      capacity: 4,
    };

    const { error } = createEventSchema.validate(data);
    expect(error?.message).toContain('must be greater than or equal to 5');
  });

});