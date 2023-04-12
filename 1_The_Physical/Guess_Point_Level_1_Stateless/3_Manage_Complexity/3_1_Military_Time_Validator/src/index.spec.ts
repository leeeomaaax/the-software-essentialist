import { isValidMilitaryTime } from "./index"

describe("military time validator", () => {
  it("should validate a string as a correct military time", () => {
    const input = "aaa"

    const result = isValidMilitaryTime(input)

    expect(result).toBeTruthy()
  })

  it("should validate a empty string as a incorrect military time", () => {
    const input = ""

    const result = isValidMilitaryTime(input)

    expect(result).toBeFalsy()
  })
})
