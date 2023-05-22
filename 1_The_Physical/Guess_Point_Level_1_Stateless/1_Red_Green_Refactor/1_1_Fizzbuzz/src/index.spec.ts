import { fizzbuzz } from "./fizzbuzz"

describe("fizzbuzz", () => {
  it("should throw if number if smaller than 1", () => {
    expect(() => fizzbuzz(0)).toThrow()
  })
  it("should throw if number if greater than 100", () => {
    expect(() => fizzbuzz(101)).toThrow()
  })
  it("should return the same number as string if not a multiple of 3 or 5", () => {
    Array.from({ length: 100 }, (_, i) => i + 1)
      .filter((number) => number % 3 !== 0 && number % 5 !== 0)
      .map((number) => expect(fizzbuzz(number)).toEqual(number.toString()))
  })
  it('should return a "Fizz" if multiples of 3', () => {
    Array.from({ length: 100 }, (_, i) => i + 1)
      .filter((number) => number % 3 === 0 && number % 5 !== 0)
      .map((number) => expect(fizzbuzz(number)).toEqual("Fizz"))
  })
  it('should return a "Buzz" if multiples of 5', () => {
    Array.from({ length: 100 }, (_, i) => i + 1)
      .filter((number) => number % 3 !== 0 && number % 5 === 0)
      .map((number) => expect(fizzbuzz(number)).toEqual("Buzz"))
  })
  it('should return a "FizzBuzz" if multiples of 3 and 5', () => {
    Array.from({ length: 100 }, (_, i) => i + 1)
      .filter((number) => number % 3 === 0 && number % 5 === 0)
      .map((number) => expect(fizzbuzz(number)).toEqual("FizzBuzz"))
  })
})
