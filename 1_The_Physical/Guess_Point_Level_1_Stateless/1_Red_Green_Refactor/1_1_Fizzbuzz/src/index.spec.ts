import { fizzbuzz } from "./fizzbuzz"

describe("fizzbuzz", () => {
  it("should throw if number if smaller than 1", () => {
    expect(() => fizzbuzz(0)).toThrow()
  })
  it("should throw if number if greater than 100", () => {
    expect(() => fizzbuzz(101)).toThrow()
  })
  it("should return the same number as string if not a multiple of 3 or 5", () => {
    expect(fizzbuzz(1)).toEqual("1")
  })
  it('should return a "Fizz" if multiples of 3', () => {
    expect(fizzbuzz(3)).toEqual("Fizz")
  })
  it('should return a "Buzz" if multiples of 5', () => {
    expect(fizzbuzz(5)).toEqual("Buzz")
  })
  it('should return a "FizzBuzz" if multiples of 3 and 5', () => {
    expect(fizzbuzz(15)).toEqual("FizzBuzz")
  })
})
