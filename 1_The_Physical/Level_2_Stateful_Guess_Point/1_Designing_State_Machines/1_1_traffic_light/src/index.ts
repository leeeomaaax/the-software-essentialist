export class TrafficLight {
  private isOn: boolean
  private colorState: "green" | "yellow" | "red"

  get isTurnedOn(): boolean {
    return this.isOn
  }
  get currentColor(): typeof this.colorState {
    return this.colorState
  }

  constructor() {
    this.isOn = false
    this.colorState = "green"
  }

  public turnOn(): void {
    this.isOn = true
    this.colorState = "green"
  }
  public turnOff(): void {
    this.isOn = false
  }
  public switchToYellow(): void {
    if (this.isOn === false)
      throw new Error("off traffic light cannot be switched to yellow")
    if (this.colorState !== "green")
      throw new Error(
        "traffic light has to be in green before switching to yellow"
      )
    this.colorState = "yellow"
  }
  public switchToRed(): void {
    if (this.isOn === false)
      throw new Error("off traffic light cannot be switched to red")
    if (this.colorState !== "yellow")
      throw new Error(
        "traffic light has to be in yellow before switching to red"
      )
    this.colorState = "red"
  }
  public switchToGreen(): void {
    if (this.isOn === false)
      throw new Error("off traffic light cannot be switched to green")
    if (this.colorState !== "red")
      throw new Error(
        "traffic light has to be in red before switching to green"
      )
    this.colorState = "green"
  }
}
