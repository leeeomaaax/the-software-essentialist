import { validatePassword } from "./index"

describe("password validator", () => {
  it("validates a password as valid", () => {
    const result = validatePassword("Test5")
    expect(result.isValid).toBe(true)
  })
  it("validates a password as invalid due to length being smaller then 5 chars", () => {
    const result = validatePassword("Tes5")
    expect(result.isValid).toBe(false)
    if (!result.isValid) {
      expect(result.errors.length).toBe(1)
      expect(result.errors[0]).toBe("SmallerThen5Chars")
    }
  })
  it("validates a password as invalid due to length being greater then 15 chars", () => {
    const result = validatePassword("Test5test5test16")
    expect(result.isValid).toBe(false)
    if (!result.isValid) {
      expect(result.errors.length).toBe(1)
      expect(result.errors[0]).toBe("GreaterThen15Chars")
    }
  })
  it("validates a password as invalid due to not having a digit", () => {
    const result = validatePassword("Testt")
    expect(result.isValid).toBe(false)
    if (!result.isValid) {
      expect(result.errors.length).toBe(1)
      expect(result.errors[0]).toBe("NoDigit")
    }
  })
  it("validates a password as invalid due to not having an upper case letter", () => {
    const result = validatePassword("test5")
    expect(result.isValid).toBe(false)
    if (!result.isValid) {
      expect(result.errors.length).toBe(1)
      expect(result.errors[0]).toBe("NoUpperCase")
    }
  })
})
