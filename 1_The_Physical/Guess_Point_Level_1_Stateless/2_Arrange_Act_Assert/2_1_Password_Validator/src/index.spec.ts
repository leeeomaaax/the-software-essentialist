import { validatePassword } from "./index"

describe("password validator", () => {
  it("validates a password as valid", () => {
    const result = validatePassword("test5")
    expect(result.isValid).toBe(true)
  })
  it("validates a password as invalid due to length being smaller then 5 chars", () => {
    const result = validatePassword("test")
    expect(result.isValid).toBe(false)
    if (!result.isValid) {
      expect(result.errors[0]).toBe("SmallerThen5Chars")
    }
  })
  it("validates a password as invalid due to length being greater then 15 chars", () => {
    const result = validatePassword("test5test5test16")
    expect(result.isValid).toBe(false)
    if (!result.isValid) {
      expect(result.errors[0]).toBe("GreaterThen15Chars")
    }
  })
  it("validates a password as invalid due to not having a digit", () => {
    const result = validatePassword("testt")
    expect(result.isValid).toBe(false)
    if (!result.isValid) {
      expect(result.errors[0]).toBe("NoDigit")
    }
  })
})
