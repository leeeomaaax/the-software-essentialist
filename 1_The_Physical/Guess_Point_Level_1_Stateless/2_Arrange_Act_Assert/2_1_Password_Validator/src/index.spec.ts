import { validatePassword } from "./index"

describe("password validator", () => {
  it("validates a password as valid", () => {
    const result = validatePassword("test5")
    expect(result.isValid).toBe(true)
  })
  it("validates a password as invalid due to length being smaller then 5", () => {
    const result = validatePassword("test")
    expect(result.isValid).toBe(false)
    if (!result.isValid) {
      expect(result.errors[0]).toBe("SmallerThen5Chars")
    }
  })
})
