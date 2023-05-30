import { TrafficLight } from "./"

describe("traffic light", () => {
  it("should be initialized as off", () => {
    const trafficLight = new TrafficLight()

    expect(trafficLight.isTurnedOn).toBe(false)
  })
  it("should turn on after initialization", () => {
    const trafficLight = new TrafficLight()

    trafficLight.turnOn()

    expect(trafficLight.isTurnedOn).toBe(true)
  })
  it("should turn off after being on", () => {
    const trafficLight = new TrafficLight()

    trafficLight.turnOn()
    trafficLight.turnOff()

    expect(trafficLight.isTurnedOn).toBe(false)
  })
  it("should turn on in green", () => {
    const trafficLight = new TrafficLight()

    trafficLight.turnOn()

    expect(trafficLight.isTurnedOn).toBe(true)
    expect(trafficLight.currentColor).toBe("green")
  })
  it("should switch to yellow after green", () => {
    const trafficLight = new TrafficLight()

    trafficLight.turnOn()
    trafficLight.switchToYellow()

    expect(trafficLight.isTurnedOn).toBe(true)
    expect(trafficLight.currentColor).toBe("yellow")
  })
  it("should fail to switch to yellow if off", () => {
    const trafficLight = new TrafficLight()

    trafficLight.turnOff()
    expect(() => trafficLight.switchToYellow()).toThrowError(
      "off traffic light cannot be switched to yellow"
    )
  })
})
