const fizzbuzz = (number: number): string => {
  if (number < 1 || number > 100)
    throw new Error("number should be between 1 and 100")
  if (number % 3 === 0 && number % 5 === 0) return "FizzBuzz"
  if (number % 3 === 0) return "Fizz"
  if (number % 5 === 0) return "Buzz"
  return number.toString()
}

export { fizzbuzz }
