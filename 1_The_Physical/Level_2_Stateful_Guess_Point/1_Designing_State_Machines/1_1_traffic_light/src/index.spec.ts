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
  it("should fail to switch to yellow if not in green", () => {
    const trafficLight = new TrafficLight()

    trafficLight.turnOn()
    trafficLight.switchToYellow()
    trafficLight.switchToRed()
    expect(() => trafficLight.switchToYellow()).toThrowError(
      "traffic light has to be in green before switching to yellow"
    )
  })
  it("should switch to red after yellow", () => {
    const trafficLight = new TrafficLight()

    trafficLight.turnOn()
    trafficLight.switchToYellow()
    trafficLight.switchToRed()

    expect(trafficLight.isTurnedOn).toBe(true)
    expect(trafficLight.currentColor).toBe("red")
  })
  it("should fail to switch to red if off", () => {
    const trafficLight = new TrafficLight()

    trafficLight.turnOff()
    expect(() => trafficLight.switchToRed()).toThrowError(
      "off traffic light cannot be switched to red"
    )
  })
  it("should fail to switch to red if not in yellow", () => {
    const trafficLight = new TrafficLight()

    trafficLight.turnOn()
    expect(() => trafficLight.switchToRed()).toThrowError(
      "traffic light has to be in yellow before switching to red"
    )
  })
  it("should switch to green after red", () => {
    const trafficLight = new TrafficLight()

    trafficLight.turnOn()
    trafficLight.switchToYellow()
    trafficLight.switchToRed()
    trafficLight.switchToGreen()

    expect(trafficLight.isTurnedOn).toBe(true)
    expect(trafficLight.currentColor).toBe("green")
  })
  it("should fail to switch to green if off", () => {
    const trafficLight = new TrafficLight()

    trafficLight.turnOff()
    expect(() => trafficLight.switchToGreen()).toThrowError(
      "off traffic light cannot be switched to green"
    )
  })
  it("should fail to switch to green if not in red", () => {
    const trafficLight = new TrafficLight()

    trafficLight.turnOn()
    trafficLight.switchToYellow()
    expect(() => trafficLight.switchToGreen()).toThrowError(
      "traffic light has to be in red before switching to green"
    )
  })
})
