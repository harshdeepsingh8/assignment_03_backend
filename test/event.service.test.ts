import * as repository from "../src/api/v1/repositories/event.repository";
import * as service from "../src/api/v1/services/event.service";

jest.mock("../src/api/v1/repositories/event.repository");

describe("Event Service Layer", () => {

  afterEach(() => {
    jest.clearAllMocks();
  });

  //  Create Event
  it("should create an event", async () => {
    // Arrange
    const mockData: any = {
      name: "Test Event",
      capacity: 10,
    };

    (repository.createEvent as jest.Mock).mockResolvedValue({
      id: "123",
      ...mockData,
    });

    // Act
    const result = await service.createEventService(mockData);

    // Assert
    expect(repository.createEvent).toHaveBeenCalled();
    expect(result.id).toBe("123");
  });

  //  Get All Events
  it("should return all events", async () => {
    // Arrange
    (repository.getAllEvents as jest.Mock).mockResolvedValue([
      { id: "1" },
    ]);

    // Act
    const result = await service.getAllEventsService();

    // Assert
    expect(repository.getAllEvents).toHaveBeenCalled();
    expect(result.length).toBe(1);
  });

  //  Get Event By ID
  it("should return event by id", async () => {
    // Arrange
    (repository.getEventById as jest.Mock).mockResolvedValue({
      id: "1",
    });

    // Act
    const result = await service.getEventByIdService("1");

    // Assert
    expect(repository.getEventById).toHaveBeenCalledWith("1");
    expect(result?.id).toBe("1");
  });

  //  Update Event
  it("should update an event", async () => {
    // Arrange
    (repository.updateEvent as jest.Mock).mockResolvedValue({
      id: "1",
    });

    // Act
    const result = await service.updateEventService("1", { name: "Updated" });

    // Assert
    expect(repository.updateEvent).toHaveBeenCalled();
    expect(result?.id).toBe("1");
  });

  // Delete Event
  it("should delete an event", async () => {
    // Arrange
    (repository.deleteEvent as jest.Mock).mockResolvedValue(true);

    // Act
    const result = await service.deleteEventService("1");

    // Assert
    expect(repository.deleteEvent).toHaveBeenCalledWith("1");
    expect(result).toBe(true);
  });

});