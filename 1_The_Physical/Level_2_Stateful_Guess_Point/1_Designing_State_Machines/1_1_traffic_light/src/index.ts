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
  }
  public turnOff(): void {
    this.isOn = false
  }
  public switchToYellow(): void {
    if (this.isOn === false)
      throw new Error("off traffic light cannot be switched to yellow")
    this.colorState = "yellow"
  }
}
