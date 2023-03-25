import { validatePassword } from "./index"

describe("password validator", () => {
  it("validates a password as valid", () => {
    const result = validatePassword("test")
    expect(result.isValid).toBe(true)
  })
})
