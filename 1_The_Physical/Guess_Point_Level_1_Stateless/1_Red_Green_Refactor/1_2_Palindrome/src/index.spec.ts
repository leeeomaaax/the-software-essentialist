import { isPalindrome } from "./index"

describe("isPalindrome", () => {
  it("Check palindrome on palindrome word", () => {
    const tests = ["mom", "wow"]
    tests.forEach((test) => {
      expect(isPalindrome(test)).toEqual(true)
    })
  })
  it("Check palindrome on non-palindrome word", () => {
    const tests = ["leo", "max"]
    tests.forEach((test) => {
      expect(isPalindrome(test)).toEqual(false)
    })
  })
  it("Check palindrome on palindrome phrase", () => {})
  it("Check palindrome on non-palindrome phrase", () => {})
  it("Check palindrome even if case is off", () => {})
})
