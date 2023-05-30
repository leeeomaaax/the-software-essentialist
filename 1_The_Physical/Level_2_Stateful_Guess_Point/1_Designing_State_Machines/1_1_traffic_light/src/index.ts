export class TrafficLight {
  private isOn: boolean

  get isTurnedOn(): boolean {
    return this.isOn
  }

  constructor() {
    this.isOn = false
  }

  public turnOn(): void {
    this.isOn = true
  }
}
