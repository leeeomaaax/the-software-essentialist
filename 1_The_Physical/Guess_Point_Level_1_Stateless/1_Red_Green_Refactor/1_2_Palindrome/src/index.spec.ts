import { isPalindrome } from "./index"

describe("isPalindrome", () => {
  it("Check palindrome on palindrome word", () => {
    const tests = ["mom", "wow", "m", "aa"]
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
  it("Check palindrome on palindrome phrase", () => {
    const tests = ["was it a rat i saw", "never odd or even"]
    tests.forEach((test) => {
      expect(isPalindrome(test)).toEqual(true)
    })
  })
  it("Check palindrome on non-palindrome phrase", () => {
    const tests = ["leo max", "ddd is awesome"]
    tests.forEach((test) => {
      expect(isPalindrome(test)).toEqual(false)
    })
  })
  it("Check palindrome even if case is off", () => {
    const tests = ["Was It A Rat I Saw", "Never Odd or Even", "Mom", "Wow"]
    tests.forEach((test) => {
      expect(isPalindrome(test)).toEqual(true)
    })
  })
})
