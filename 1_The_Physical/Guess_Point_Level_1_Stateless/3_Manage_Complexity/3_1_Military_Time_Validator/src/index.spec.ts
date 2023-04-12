import { isValidMilitaryTime } from "./index"

describe("military time validator", () => {
  it("should validate a string as a correct military time", () => {
    const input = ""

    const result = isValidMilitaryTime(input)

    expect(result).toBeTruthy()
  })
})
