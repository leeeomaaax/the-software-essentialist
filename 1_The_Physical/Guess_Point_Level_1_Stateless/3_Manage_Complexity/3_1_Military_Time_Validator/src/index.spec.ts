import { isValidMilitaryTime } from "./index"

describe("military time validator", () => {
  it("should validate a string as a correct military time", () => {
    const input = "12:12 - 12:12"

    const result = isValidMilitaryTime(input)

    expect(result).toBeTruthy()
  })

  it("should validate a empty string as a incorrect military time", () => {
    const input = ""

    const result = isValidMilitaryTime(input)

    expect(result).toBeFalsy()
  })
  it("should validate a longer string as a incorrect military time", () => {
    const input = "12:12 - 12:12 extra chars"

    const result = isValidMilitaryTime(input)

    expect(result).toBeFalsy()
  })

  it("should validate hourStart in string as a correct", () => {
    const input = "12:00 - 00:00"

    const result = isValidMilitaryTime(input)

    expect(result).toBeTruthy()
  })
  it("should validate hourStart '24' in string as a correct", () => {
    const input = "24:00 - 00:00"

    const result = isValidMilitaryTime(input)

    expect(result).toBeFalsy()
  })
  it("should validate minuteStart in string as a correct", () => {
    const input = "00:15 - 00:00"

    const result = isValidMilitaryTime(input)

    expect(result).toBeTruthy()
  })
  it("should validate minuteStart '60' in string as a correct", () => {
    const input = "00:60 - 00:00"

    const result = isValidMilitaryTime(input)

    expect(result).toBeFalsy()
  })
  it("should validate hourEnd in string as a correct", () => {
    const input = "12:00 - 00:00"

    const result = isValidMilitaryTime(input)

    expect(result).toBeTruthy()
  })
  it("should validate hourEnd '24' in string as a correct", () => {
    const input = "24:00 - 24:00"

    const result = isValidMilitaryTime(input)

    expect(result).toBeFalsy()
  })
  it("should validate minuteEnd in string as a correct", () => {
    const input = "00:15 - 00:00"

    const result = isValidMilitaryTime(input)

    expect(result).toBeTruthy()
  })
  it("should validate minuteEnd '60' in string as a correct", () => {
    const input = "00:60 - 00:60"

    const result = isValidMilitaryTime(input)

    expect(result).toBeFalsy()
  })
})
