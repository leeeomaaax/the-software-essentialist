const fizzbuzz = (number: number): string => {
  if (number < 1 || number > 100)
    throw new Error("number should be between 1 and 100")
  const isMultipleOf3 = number % 3 === 0
  const isMultipleOf5 = number % 5 === 0
  if (isMultipleOf3 && isMultipleOf5) return "FizzBuzz"
  if (isMultipleOf3) return "Fizz"
  if (isMultipleOf5) return "Buzz"
  return number.toString()
}

export { fizzbuzz }
