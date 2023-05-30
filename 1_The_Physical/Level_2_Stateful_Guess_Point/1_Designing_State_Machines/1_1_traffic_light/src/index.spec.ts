import { TrafficLight } from "./"

describe("traffic light", () => {
  it("should be initialized as off", () => {
    const trafficLight = new TrafficLight()

    expect(trafficLight.isTurnedOn).toBe(false)
  })
})
